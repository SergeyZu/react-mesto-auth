import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageUnauthorized from './PageUnauthorized';
import HeaderLogin from './HeaderLogin';
import * as auth from '../auth';

function Login({ handleLogin }) {
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
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.jwt) {
          setformValue({ email: '', password: '' });
          handleLogin();
          navigate('/cards', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <PageUnauthorized
      component={<HeaderLogin />}
      title="Вход"
      buttonText="Войти"
      emailValue={formValue.email}
      passwordValue={formValue.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
