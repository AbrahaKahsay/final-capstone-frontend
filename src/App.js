import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home/*" element={<Main />} />
        <Route path="/" element={<Authentification />} />
      </Routes>
    </>
  );
}

export default App;
