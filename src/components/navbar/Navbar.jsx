import React, { useState } from "react";
import logo from "../../assets/header__logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/links";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return window.innerWidth >= 1200 ? (
    <nav className='nav'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='nav-items'>
        <ul className='nav-items-links'>
          {navLinks.map((link, index) => {
            const { name, to } = link;
            return (
              <li key={index}>
                <Link to={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className='nav-items-btns'>
          <Link to='/register'>
            <button className='btn'>Register</button>
          </Link>
          <Link to='/login'>
            <button className='btn btn-blue'>Sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  ) : (
    <>
      <nav className='nav'>
        <div className='nav-logo'>
          <Link to='/' onClick={() => setShowNavbar(false)}>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div
          className='hambugger-menu'
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {showNavbar ? (
            <FaTimes className='icon' />
          ) : (
            <FaBars className='icon' />
          )}
        </div>
      </nav>
      <div className={`mob-nav-items  ${showNavbar && `show`}`}>
        <div className='nav-items'>
          <ul className='nav-items-links'>
            {navLinks.map((link, index) => {
              const { name, to } = link;
              return (
                <li key={index} onClick={() => setShowNavbar(false)}>
                  <Link to={to}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <div className='nav-items-btns'>
            <Link to='/register' onClick={() => setShowNavbar(false)}>
              <button className='btn'>Register</button>
            </Link>
            <Link to='/login' onClick={() => setShowNavbar(false)}>
              <button className='btn btn-blue'>Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
