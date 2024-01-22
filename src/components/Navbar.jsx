import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <>
      <div className="burger-icon" onClick={toggleNav}>
        {isNavActive ? '✕' : '☰'}
      </div>
      <nav className={isNavActive ? 'active' : ''}>
        <ul>
          <li>
            <NavLink to="/about" onClick={toggleNav}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/programs" onClick={toggleNav}>
              PROGRAMS
            </NavLink>
          </li>
          <li>
            <NavLink to="/plans" onClick={toggleNav}>
              PLANS
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={toggleNav}>
              HOME
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;