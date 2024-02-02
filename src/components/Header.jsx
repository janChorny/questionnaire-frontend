import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';

const Header = () => {
    const navigate = useNavigate();

    const { isAdmin, isManager } = useAuth();
    const isAllowed = isAdmin || isManager;
    const isNotAllowed = !isAdmin && !isManager;

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation();

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate]);

    if (isLoading) return <p>Ausloggen...</p>

    if (isError) return <p>Fehler: {error.data?.message}</p>

    const logoutButton = (
        <button
            className="btn btn--login"
            title="Logout"
            onClick={sendLogout}
        >
            Ausloggen
        </button>
    )

    const content = (
      <header className="header">
        <div className="header__container container">
          <div className="header__block">
            <Link to="/">
              <img src="free-circular-logo.webp" alt="Logo" className="header__img" />
            </Link>
            {isNotAllowed && <Link to="/login"><button className="btn btn--login">Admin loggen</button>
            </Link>}
            <div className="header__nav">
              {isAllowed && logoutButton}
            </div>
          </div>         
        </div>
      </header>
    )

    return content
}
export default Header;
