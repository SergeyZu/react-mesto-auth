// function Login({ handleLogin }) {
//   const [formValue, setFormValue] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   function handleChange(evt) {
//     const input = evt.target;

//     setFormValue({ ...formValue, [input.name]: input.value });
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     console.log(formValue);
//     if (!formValue.email || !formValue.password) {
//       return;
//     }
//     auth
//       .authorize(formValue.email, formValue.password)
//       .then((data) => {
//         console.log(data);
//         if (data.token) {
//           setFormValue({ email: '', password: '' });
//           handleLogin();
//           navigate('/cards', { replace: true });
//         }
//       })
//       .catch((err) => console.log(err));
//   }
import { useState } from 'react';
import Header from './Header';

const Login = ({ handleSubmit }) => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });

  const handleChange = (evt) => {
    const input = evt.target;

    setFormValue({ ...formValue, [input.name]: input.value });
  };

  return (
    <div onSubmit={handleSubmit} className="auth">
      <Header link={'/sign-up'} linkText={'Регистрация'} />
      <form className="auth__form">
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
