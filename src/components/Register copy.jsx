import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    >
      <a className="account__link" href="#">
        Уже зарегистрированы? Войти
      </a>
    </PageUnauthorized>
  );
}

export default Register;
