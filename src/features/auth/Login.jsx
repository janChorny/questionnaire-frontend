import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/notes')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (
        <section className="login">
          <div className="login__container container">
            <div className="login__block">
                <div className="login">
                  <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>
                  <form className="login-form form" onSubmit={handleSubmit}>
                        <label className="login-form__username" htmlFor="form__username">Name:</label>
                        <input
                            className="login-form__input"
                            type="text"
                            id="form__username"
                            ref={userRef}
                            value={username}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                        />
    
                        <label className="login-form__username" htmlFor="form__password">Passwort:</label>
                        <input
                            className="login-form__input"
                            type="password"
                            id="form__password"
                            onChange={handlePwdInput}
                            value={password}
                            required
                        />
                        <button className="form__submit-button btn">Eintragen</button>

                        <label htmlFor="form__persist" className="form__persist">
                            <input
                                type="checkbox"
                                className="form__checkbox"
                                id="form__persist"
                                onChange={handleToggle}
                                checked={persist}
                            />
                            Vertrauen Sie diesem Gerät
                        </label>
                  </form>
              </div>
            </div>
          </div>
        </section>
    )

    return content
}
export default Login;
