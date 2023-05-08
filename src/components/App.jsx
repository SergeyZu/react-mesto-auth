import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CardsPage from './CardsPage';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../auth';
import InfoTooltip from './InfoTooltip';
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [titleTooltip, setTitleTooltip] = useState('');
  const [imageTooltip, setImageTooltip] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setToken(token);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    auth
      .getUserData(token)
      .then((user) => {
        setUserData(user);
        setIsLoggedIn(true);
        navigate('/cards');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, navigate]);

  const registerUser = ({ email, password }) => {
    auth
      .register(email, password)
      .then((res) => {
        setIsRegistrationSuccess(true);
        setImageTooltip(success);
        setTitleTooltip('Вы успешно зарегистрировались!');
        console.log(res);
      })
      .catch((err) => {
        setIsRegistrationSuccess(false);
        setImageTooltip(fail);
        setTitleTooltip('Что-то пошло не так! Попробуйте еще раз.');
        console.log(err);
      })
      .finally(() => {
        setIsOpenTooltip(true);
      });
  };

  const loginUser = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setToken(res.token);
        setEmail(email);
      })
      .catch((err) => {
        setIsRegistrationSuccess(false);
        setImageTooltip(fail);
        setTitleTooltip('Что-то пошло не так! Попробуйте еще раз.');
        setIsOpenTooltip(true);
        console.log(err);
      });
  };

  const logOut = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    setToken('');
    setUserData({ email: '', password: '' });
    navigate('/sign-in');
  };

  const setInfoTooltip = () => {
    if (isRegistrationSuccess) {
      return {
        title: 'Вы&nbsp;успешно зарегистрировались',
        img: { success },
        alt: 'ОК',
      };
    } else {
      return {
        title:
          'Что-то&nbsp;пошло&nbsp;не&nbsp;так! Попробуйте&nbsp;еще&nbsp;раз',
        img: { fail },
        alt: 'Ошибка',
      };
    }
  };

  const closeTooltip = () => {
    setIsOpenTooltip(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Navigate to="/sign-in" replace />
            ) : (
              <Navigate to="/cards" replace />
            )
          }
        />
        <Route
          path="/cards"
          element={
            <ProtectedRoute
              component={CardsPage}
              loggedIn={isLoggedIn}
              logOut={logOut}
              userData={userData}
              email={email}
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className="registerContainer">
              <Register registerUser={registerUser} />
            </div>
          }
        />
        <Route
          path="/sign-in"
          element={
            <div className="loginContainer">
              <Login loginUser={loginUser} />
            </div>
          }
        />
      </Routes>

      <InfoTooltip
        isOpen={isOpenTooltip}
        onClose={closeTooltip}
        title={titleTooltip}
        img={imageTooltip}
      />
    </>
  );
}

export default App;
