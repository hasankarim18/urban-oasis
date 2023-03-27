import React from 'react';
import classes from './Header.module.css';
import Logo from '../../images/Logo.svg'

const Header = () => {
    return (
      <div
        className={`text-white d-flex flex-column flex-md-row justify-content-between align-items-center ${classes.header}`}
      >
        <img className={classes.logo} src={Logo} alt="" />
        <nav className={`d-flex gap-3 fs-5 ${classes.nav} text-capitalize`}>
          <li className="nav-itme">
            <a href="/shop" className={`nav-link ${classes.navlink}`}>
              shop
            </a>
          </li>
          <li className="nav-itme">
            <a href="/order" className={`nav-link ${classes.navlink}`}>
              order 
            </a>
          </li>
          <li className="nav-itme">
            <a href="/inventory" className={`nav-link ${classes.navlink}`}>
              Inventory
            </a>
          </li>
          <li className="nav-itme">
            <a href="/login" className={`nav-link ${classes.navlink}`}>
              login
            </a>
          </li>
        </nav>
      </div>
    );
};

export default Header;