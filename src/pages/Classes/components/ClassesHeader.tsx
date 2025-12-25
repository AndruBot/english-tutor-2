import React from 'react';
import { Link } from 'react-router-dom';
import './ClassesHeader.scss';
import BurgerMenu from '../../../components/BurgerMenu';

const ClassesHeader = () => {
  return (
    <header className="classes-header">
      <div className="classes-header-content">
        <h1 className="classes-header-title">ABOUT CLASSES</h1>
      </div>
      <div className="burger-menu">
          <BurgerMenu />
      </div>
    </header>
  );
};

export default ClassesHeader;
