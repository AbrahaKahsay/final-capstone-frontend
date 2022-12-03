import { useState } from 'react';
import '../styles/login.css';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const changeLogin = () => {
    document.getElementById('signup').classList.toggle('inactive');
    document.getElementById('login').classList.toggle('inactive');
  };
  const handleOnChange = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  return (
    <section id="signup" className="main-authentification inactive">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h2 id="authentification-h2">Sign Up</h2>
            <form className="login">
              <div className="login__field">
                <input type="text" onChange={handleOnChange} className="login__input" placeholder="User name" />
              </div>
              <button className="button login__submit" type="button">
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
        </div>
      </div>
    </section>
  );
};

export default Signin;
