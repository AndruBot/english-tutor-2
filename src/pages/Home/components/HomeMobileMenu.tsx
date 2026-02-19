import React from 'react';
import { Link } from 'react-router-dom';

const HomeMobileMenu = () => {
  return (
    <div className="mobile-menu">
      <Link to="/about" className="mobile-menu-item mobile-menu-item-about">
        ABOUT ME
      </Link>
      <Link to="/classes" className="mobile-menu-item mobile-menu-item-classes">
        ABOUT CLASSES
      </Link>
      <Link to="/booking" className="mobile-menu-item mobile-menu-item-schedule">
        BOOKING
      </Link>
      <Link to="/faq" className="mobile-menu-item mobile-menu-item-faq">
        FAQ
      </Link>
    </div>
  );
};

export default HomeMobileMenu;
