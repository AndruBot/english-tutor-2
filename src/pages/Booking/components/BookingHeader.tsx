import React from 'react';
import { Link } from 'react-router-dom';
import './BookingHeader.scss';
import BurgerMenu from '../../../components/BurgerMenu';

const BookingHeader = () => {
  return (
    <header className="booking-header">
      <div className="classes-header-content">
        <h1 className="booking-header-title desktop-only">SCHEDULE AND BOOKING</h1>
        <h1 className="booking-header-title mobile-only">BOOKING</h1>
        <div className="burger-menu">
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default BookingHeader;
