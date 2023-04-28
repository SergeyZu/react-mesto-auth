import PageUnauthorized from './PageUnauthorized';

function Register() {
  return (
    <PageUnauthorized title="Регистрация" buttonText="Зарегистрироваться">
      <a className="account__link" href="#">
        Уже зарегистрированы? Войти
      </a>
    </PageUnauthorized>
  );
}

export default Register;
