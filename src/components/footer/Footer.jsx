import React from "react";
import logo from "../../assets/header__logo.png";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/links";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-grid-container'>
        <div className='footer-grid-container-item'>
          <div className='footer-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <p>
            © 2022 Triad Firm Ltd.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className='footer-grid-container-item'>
          <ul className='footer-nav'>
            {footerLinks.map((link, index) => {
              const { name, to } = link;
              return (
                <li key={index}>
                  <Link to={to}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
