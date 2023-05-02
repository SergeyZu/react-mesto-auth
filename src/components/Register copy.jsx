import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageUnauthorized from './PageUnauthorized';
import HeaderRegister from './HeaderRegister';

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
  }

  return (
    <PageUnauthorized
      component={<HeaderRegister />}
      title="Регистрация"
      buttonText="Зарегистрироваться"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Link to="/sign-in" className="account__link">
        Уже зарегистрированы? Войти
      </Link>
    </PageUnauthorized>
  );
}

export default Register;
