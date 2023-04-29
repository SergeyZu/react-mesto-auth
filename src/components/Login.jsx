import PageUnauthorized from './PageUnauthorized';
import HeaderLogin from './HeaderLogin';

function Login() {
  return (
    <PageUnauthorized
      component={<HeaderLogin />}
      title="Вход"
      buttonText="Войти"
    />
  );
}

export default Login;
