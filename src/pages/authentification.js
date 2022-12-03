import { useSelector } from 'react-redux';
import Login from '../components/login';
import Signin from '../components/singin';

function Authentification() {
  const user = useSelector((state) => state.current_user);
  console.log(user);
  return (
    <>
      <Login />
      <Signin />
    </>
  );
}

export default Authentification;
