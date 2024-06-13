import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Formula 1 - G O A T</div>
      {/* <div className="navbar-menu">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
        <ul className="menu">
          <li><Link to="/driver-champions">Driver Champions</Link></li>
          <li><Link to="/driver-points">Driver Points</Link></li>
          <li><Link to="/team-champions">Team Champions</Link></li>
          <li><Link to="/engine-champions">Engine Champions</Link></li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
