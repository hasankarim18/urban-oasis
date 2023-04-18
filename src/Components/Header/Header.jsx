import React, { useContext } from 'react';
import classes from './Header.module.css';
import Logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
 
    return (
      <div
        className={`text-white d-flex flex-column flex-md-row justify-content-between align-items-center ${classes.header}`}
      >
        <img className={classes.logo} src={Logo} alt="" />
        <nav
          className={`d-flex gap-3 fs-5 align-items-center ${classes.nav} text-capitalize`}
        >
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
          <li className="nav-itme">
            <NavLink to="/signup" className={`nav-link ${classes.navlink}`}>
              Signup
            </NavLink>
          </li>
          {user && (
            <li>
              <span className="text-warning"> {user?.email.split('@')[0]}</span>
            </li>
          )}
        </nav>
      </div>
    );
};

export default Header;