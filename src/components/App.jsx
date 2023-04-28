import { Routes, Route } from 'react-router-dom';
import CardsPage from './CardsPage';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardsPage />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
}

export default App;
