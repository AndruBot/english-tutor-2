import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import BurgerMenu from '../../../components/BurgerMenu';

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Link to="/">
        <img src={logo} alt="Nika Churikova Logo" className="logo" />
      </Link>
      <nav className="nav-menu">
        <Link to="/about" className="about">ABOUT ME</Link>
        <Link to="/classes" className="classes">CLASSES</Link>
        <Link to="/booking" className="schedule">SCHEDULE AND BOOKING</Link>
        <Link to="/faq" className="faq">FAQ</Link>
      </nav>
      <div className="burger-menu">
        <BurgerMenu />
      </div>
    </div>
  );
};

export default HomeHeader;
