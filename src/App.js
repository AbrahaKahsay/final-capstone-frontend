import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import Reservations from './components/reservations/reservations';
import NavBar from './components/navbar/navbar';
import Form from './components/reservations/reserveForm';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
