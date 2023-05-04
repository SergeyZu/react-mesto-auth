// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PageUnauthorized from './PageUnauthorized';
// import HeaderRegister from './HeaderRegister';
// import * as auth from '../auth';

// function Register() {
//   const [formValue, setformValue] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   function handleChange(evt) {
//     const { name, value } = evt.target;

//     setformValue({ ...formValue, [name]: value });
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     console.log(formValue);
//     // const { email, password } = formValue;
//     auth.register(formValue.email, formValue.password).then((res) => {
//       navigate('/sign-in', { replace: true });
//     });
//   }

//   return (
//     <PageUnauthorized
//       component={<HeaderRegister />}
//       title="Регистрация"
//       buttonText="Зарегистрироваться"
//       emailValue={formValue.email}
//       passwordValue={formValue.password}
//       onChange={handleChange}
//       onSubmit={handleSubmit}
//     >
//       <div className="auth__text-block">
//         <p className="auth__text">Уже зарегистрированы?</p>
//         <Link to="/sign-in" className="auth__link">
//           Войти
//         </Link>
//       </div>
//     </PageUnauthorized>
//   );
// }
import { Link } from 'react-router-dom';
import Header from './Header';

const Register = () => {
  return (
    <div className="auth">
      <Header link={'/sign-in'} linkText={'Войти'} />
      <form className="auth__form">
        <h2 className="auth__title">Вход</h2>
        <input
          placeholder="Email"
          id="email-input"
          className="auth__input"
          name="email"
          type="email"
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
          minLength="3"
          maxLength="20"
          required
        />
        <button className="auth__button" type="submit">
          Войти
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
