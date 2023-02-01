import { useSelector } from 'react-redux';
import Login from '../components/login';
import PendingPopup from '../components/pending-popup';
import Signin from '../components/singin';

const Authentification = () => {
  const status = useSelector((state) => state.current_user.status);
  return (
    <>
      <Login />
      <Signin />
      {
        status
          ? <PendingPopup />
          : ''
      }
    </>
  );
};

export default Authentification;
