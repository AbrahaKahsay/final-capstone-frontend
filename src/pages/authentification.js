import { useSelector } from 'react-redux';
import Login from '../components/login';
import Signin from '../components/singin';

function Authentification() {
  const errorMsg = useSelector((state) => state.current_user.error);
  console.log(errorMsg);
  return (
    <>
      <Login />
      <Signin />
    </>
  );
}

export default Authentification;
