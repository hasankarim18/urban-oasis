import React from 'react';
import classes from './Header.module.css';
import Logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div
        className={`text-white d-flex flex-column flex-md-row justify-content-between align-items-center ${classes.header}`}
      >
        <img className={classes.logo} src={Logo} alt="" />
        <nav className={`d-flex gap-3 fs-5 ${classes.nav} text-capitalize`}>
          <li className="nav-itme">
            <NavLink to="/" className={`nav-link ${classes.navlink}`}>
              shop
            </NavLink>
          </li>
          <li className="nav-itme">
            <NavLink to="/orders" className={`nav-link ${classes.navlink}`}>
              orders
            </NavLink>
          </li>
          <li className="nav-itme">
            <NavLink to="/inventory" className={`nav-link ${classes.navlink}`}>
              Inventory
            </NavLink>
          </li>
          <li className="nav-itme">
            <NavLink to="/login" className={`nav-link ${classes.navlink}`}>
              login
            </NavLink>
          </li>
        </nav>
      </div>
    );
};

export default Header;