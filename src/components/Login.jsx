import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageUnauthorized from './PageUnauthorized';
import HeaderLogin from './HeaderLogin';
import * as auth from '../auth';

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;

    setFormValue({ ...formValue, [input.name]: input.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formValue);
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setFormValue({ email: '', password: '' });
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
