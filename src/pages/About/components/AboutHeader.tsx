import React from 'react';
import BurgerMenu from '../../../components/BurgerMenu';
import { Link } from 'react-router-dom';
import './AboutHeader.scss';

const AboutHeader = () => {
  return (
    <header className="about-header">
      <div className="about-header-content">
        <h1 className="about-header-title">ABOUT</h1>
        <Link to="/classes" className="testimonials-button">
          ОТЗЫВЫ СТУДЕНТОВ
        </Link>
      </div>
      <div className="burger-menu">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default AboutHeader;
