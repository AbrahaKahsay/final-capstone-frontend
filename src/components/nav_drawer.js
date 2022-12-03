import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import '../styles/navdrawer.css';
import { userLogout } from '../redux/models/login';

function NavDrawer() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const createLinks = () => {
    const tags = ['MODELS', 'RESERVE', 'MY RESERVATIONS', 'ADD MOTORCYCLE', 'DELETE MOTORCYCLE'];
    const addresses = ['/models', '/reserve', '/my-reservations', '/add-motorcycle', '/delete-motorcycle'];
    const links = [];

    for (let i = 0; i < tags.length; i += 1) {
      links.push(
        <NavLink
          className="link"
          onClick={() => setShowMenu(false)}
          to={addresses[i]}
          key={tags[i]}
        >
          {tags[i]}
        </NavLink>,
      );
    }
    links.push(
      <NavLink
        className="link"
        onClick={() => dispatch(userLogout())}
        to="/"
        key={6}
      >
        LOG OUT
      </NavLink>,
    );
    return links;
  };

  const socialMedia = () => {
    const logos = ['mdi:twitter', 'ri:facebook-fill', 'vaadin:google-plus', 'mdi:vimeo', 'cib:pinterest-p'];
    const social = [];

    for (let i = 0; i < logos.length; i += 1) {
      social.push(
        <li className="social-item" key={logos[i]}>
          <Icon
            className="social-icon"
            color="#333333"
            icon={logos[i]}
          />
        </li>,
      );
    }
    return social;
  };

  return (
    <>
      <div className="mobile-menu">
        <Link
          className="brand"
          onClick={() => setShowMenu(false)}
          to="/"
        >
          Ducati
        </Link>
        <Icon
          className="size-menu-btn"
          icon={showMenu ? 'humbleicons:times' : 'material-symbols:menu-rounded'}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className={`mobile-cont ${showMenu ? 'show-nav' : 'hide-nav'}`}>
          <nav
            className="mobile-nav"
          >
            { createLinks() }
          </nav>
          <ul className="footer-menu">
            { socialMedia() }
          </ul>
        </div>
      </div>

      <div className="desktop-menu">
        <Link
          className="brand"
          to="/"
        >
          Ducati
        </Link>
        <nav
          className="mobile-nav"
        >
          { createLinks() }
        </nav>
        <ul className="footer-menu">
          { socialMedia() }
        </ul>
      </div>
    </>
  );
}

export default NavDrawer;
