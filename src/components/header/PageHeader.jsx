import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageHeader = ({ children }) => {
  return (
    <header className='header'>
      <div className='header-navigation'>
        <Link to='/'>Home</Link>
        <FaChevronRight className='icon' />
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
