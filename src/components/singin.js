import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanUser, createUserAsync } from '../redux/models/login';
import '../styles/login.css';

const Signin = () => {
  const currentUser = useSelector((state) => state.current_user);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeLogin = () => {
    document.querySelector('.login__input.singup').value = '';
    document.getElementById('signup').classList.toggle('inactive');
    document.getElementById('login').classList.toggle('inactive');
    dispatch(cleanUser());
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      dispatch(createUserAsync(name));
      setName('');
    }
  };
  useEffect(() => {
    if (currentUser.login) {
      navigate('/home/models');
    }
  });
  return (
    <section id="signup" className="main-authentification inactive">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h2 id="authentification-h2">Sign Up</h2>
            <form className="login" onSubmit={handleOnSubmit}>
              <div className="login__field">
                <input type="text" onChange={handleOnChange} className="login__input singup" placeholder="User name" />
              </div>
              <button className="button login__submit" type="submit">
                <span className="button__text">Sign Up</span>
              </button>
              <button className="button login__submit" type="button" onClick={changeLogin}>
                <span className="button__text">Log In</span>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
          <div id="error-msg" className={currentUser.error ? '' : 'inactive'}>{currentUser.error}</div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
