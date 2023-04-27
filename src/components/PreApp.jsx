import { Routes, Route } from 'react-router-dom';
import App from './App';
import Register from './Register';
import Login from './Login';

function PreApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default PreApp;
