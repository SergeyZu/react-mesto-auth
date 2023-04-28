import logo from '../images/logo.svg';

function Header({ href, linkText, children }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
      {children}
      <a className="header__link" href={href}>
        {linkText}
      </a>
    </header>
  );
}

export default Header;
