import PageUnauthorized from './PageUnauthorized';
import HeaderRegister from './HeaderRegister';

function Register() {
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
