import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/home/*" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
