import { useState } from 'react';
import Header from './Header';

const Login = ({ loginUser }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const handleChange = (evt) => {
    const input = evt.target;

    setFormValue({ ...formValue, [input.name]: input.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginUser(formValue);
  };

  return (
    <div className="auth">
      <Header link={'/sign-up'} linkText={'Регистрация'} />
      <form onSubmit={handleSubmit} className="auth__form">
        <h2 className="auth__title">Вход</h2>
        <input
          placeholder="Email"
          id="email-input"
          className="auth__input"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
          minLength="5"
          maxLength="40"
          required
        />
        <input
          placeholder="Пароль"
          id="password-input"
          className="auth__input"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          minLength="3"
          maxLength="20"
          required
        />
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
