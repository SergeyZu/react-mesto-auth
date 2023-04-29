import logo from '../images/logo.svg';

function Header({ href, linkText, children }) {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
      <div className="header__group">
        <p className="header__text">{children}</p>
        <a className="header__link" href={href}>
          {linkText}
        </a>
      </div>
    </header>
  );
}

export default Header;
