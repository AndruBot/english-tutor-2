import React from 'react';
import { Link } from 'react-router-dom';

const HomeMobileMenu = () => {
  return (
    <div className="mobile-menu">
      <Link to="/about" className="mobile-menu-item mobile-menu-item-about">
        <span>ABOUT</span>
      </Link>
      <Link to="/classes" className="mobile-menu-item mobile-menu-item-classes">
        <span>ABOUT CLASSES</span>
      </Link>
      <Link to="/faq" className="mobile-menu-item mobile-menu-item-faq">
        <span>FAQ</span>
      </Link>
      <Link to="/booking" className="mobile-menu-item mobile-menu-item-schedule">
        <span>SCHEDULE AND BOOKING</span>
      </Link>
    </div>
  );
};

export default HomeMobileMenu;
