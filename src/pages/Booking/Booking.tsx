import React from 'react';
import PageTemplate from '../../PageTemplate';
import BookingHeader from './components/BookingHeader';
import BookingBody from './components/BookingBody';
import BookingMobileBody from './components/BookingMobileBody';
import './Booking.scss';

const Booking = () => {
  return (
    <PageTemplate
      header={<BookingHeader />}
      pageClass="page-booking"
    >
      <div className="booking-container">
        <BookingBody />
      </div>
      <div className='booking-container booking-mobile-container'>
        <BookingMobileBody />
      </div>
    </PageTemplate>
  );
};

export default Booking;
