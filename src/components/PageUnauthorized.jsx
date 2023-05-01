import Header from './Header';

function PageUnauthorized({
  component,
  title,
  buttonText,
  onSubmit,
  handleChange,
  children,
}) {
  return (
    <div className="account">
      {component}
      <form className="account__form" onSubmit={onSubmit}>
        <h2 className="account__title">{title}</h2>
        <input
          placeholder="Email"
          id="email-input"
          className="account__input"
          name="email"
          type="email"
          onChange={handleChange}
          minLength="5"
          maxLength="40"
          required
        />
        <input
          placeholder="Пароль"
          id="password-input"
          className="account__input"
          name="password"
          type="password"
          onChange={handleChange}
          minLength="3"
          maxLength="20"
          required
        />
        <button className="account__button" type="submit">
          {buttonText}
        </button>
        {children}
      </form>
    </div>
  );
}

export default PageUnauthorized;
