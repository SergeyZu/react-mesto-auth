import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ link, linkText, children }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
      <div className="header__group">
        <p className="header__text">{children}</p>
        <Link to={link} className="header__link">
          {linkText}
        </Link>
      </div>
    </header>
  );
}

export default Header;
