import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import CardsPage from './CardsPage';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  // const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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

  // if (isLoading) {
  //   return <div>Загрузка...</div>;
  // }

  return (
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
          />
        }
      />

      {/* <Route path="/cards" element={<CardsPage />} /> */}

      {/* <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} /> */}

      {/* <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} /> */}

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
  );
}

export default App;
