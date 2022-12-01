import '../styles/login.css';

const Login = () => (
  <section className="main-authentification">
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <h2 id="authentification-h2">Log in</h2>
          <form className="login">
            <div className="login__field">
              <input type="text" className="login__input" placeholder="User name" />
            </div>
            <button className="button login__submit" type="button">
              <span className="button__text">Log In Now</span>
            </button>
            <button className="button login__submit" type="button">
              <span className="button__text">Sign Up</span>
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

export default Login;
