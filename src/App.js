import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Authentification from './pages/authentification';
import NavDrawer from './components/nav_drawer';
import Models from './components/models';
import ModelDetails from './components/model_details';
import Reserve from './components/reserve';
import MyReservations from './components/my_reservations';
import AddMotorcycle from './components/add_motorcycle';
import DeleteMotorcycle from './components/delete_motorcycle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/home/*" element={<Main />} />
      </Routes>
      <NavDrawer />
      <main>
        <Routes>
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id" element={<ModelDetails />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/add-motorcycle" element={<AddMotorcycle />} />
          <Route path="/delete-motorcycle" element={<DeleteMotorcycle />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
