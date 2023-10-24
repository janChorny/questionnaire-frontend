import { Link } from 'react-router-dom'

const Header = () => {

    const content = (
      <header className="header">
        <div className="header__container container">
          <div className="header__block">
            <Link to="/">
              <img src="logo.png" alt="Logo" className="header__img" />
            </Link>
            <button className="btn btn--login">
              <Link to="/login">Admin Login</Link>
            </button>
          </div>         
        </div>
      </header>
    )

    return content
}
export default Header
