import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageUnauthorized from './PageUnauthorized';
import HeaderRegister from './HeaderRegister';
import * as auth from '../auth';

function Register() {
  const [formValue, setformValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;

    setformValue({ ...formValue, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formValue);
    // const { email, password } = formValue;
    auth.register(formValue.email, formValue.password).then((res) => {
      navigate('/sign-in', { replace: true });
    });
  }

  return (
    <PageUnauthorized
      component={<HeaderRegister />}
      title="Регистрация"
      buttonText="Зарегистрироваться"
      emailValue={formValue.email}
      passwordValue={formValue.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="account__text-block">
        <p className="account__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="account__link">
          Войти
        </Link>
      </div>
    </PageUnauthorized>
  );
}

export default Register;
