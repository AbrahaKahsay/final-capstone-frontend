import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="links">
    <ul>
      <li><NavLink className="link-list" to="/">Home</NavLink></li>
      <li><NavLink className="link-list" to="/reservations">Reservations</NavLink></li>
      <li><NavLink className="link-list" to="/bikes">Bikes</NavLink></li>
    </ul>
  </div>

);

export default NavBar;
