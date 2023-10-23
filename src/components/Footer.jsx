import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/')


    const goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="zum Anfang"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
            )

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <button className="btn">
              <Link to="/login">Admin Login</Link>
            </button>
        </footer>
    )
    return content
}
export default Footer
