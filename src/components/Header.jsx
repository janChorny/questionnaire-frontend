import { Link } from 'react-router-dom'

const Header = () => {

    const content = (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/">
                    <img src="logo.png" alt="Logo" className="dash-header__img" />
                </Link>
            </div>
        </header>
    )

    return content
}
export default Header
