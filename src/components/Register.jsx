import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Register = ({ registerUser }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const handleChange = (evt) => {
    const input = evt.target;

    setFormValue({ ...formValue, [input.name]: input.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerUser(formValue);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/sign-in');
  };

  return (
    <div className="auth">
      <Header onClick={goToLogin} buttonText={'Войти'} />
      {/* <Header link={'/sign-in'} linkText={'Войти'} /> */}
      <form onSubmit={handleSubmit} className="auth__form">
        <h2 className="auth__title">Регистрация</h2>
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
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__text-block">
        <p className="auth__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="auth__link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
