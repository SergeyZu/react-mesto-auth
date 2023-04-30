import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CardsPage from './CardsPage';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          !loggedIn ? (
            <Navigate to="/sign-in" replace />
          ) : (
            <Navigate to="/cards" replace />
          )
        }
      />
      <Route
        path="/cards"
        element={<ProtectedRoute element={<CardsPage />} loggedIn={loggedIn} />}
      />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      {/* <Route
        path="/sign-up"
        element={
          <div className="registerContainer">
            <Register />
          </div>
        }
      />
      <Route
        path="/sign-in"
        element={
          <div className="loginContainer">
            <Login />
          </div>
        }
      /> */}
    </Routes>
  );
}

export default App;
