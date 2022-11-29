import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">My Reservations</NavLink>
        </li>
        <li>
          {/* <NavLink to="/bikes">Bikes</NavLink> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
