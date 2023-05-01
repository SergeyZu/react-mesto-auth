import Header from './Header';

function HeaderCardsPage() {
  return (
    <Header link={'/sign-in'} linkText={'Выйти'}>
      email@mail.com
    </Header>
  );
}

export default HeaderCardsPage;
