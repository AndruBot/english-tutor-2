import React from 'react';
import './BookingBody.scss';
import { BookingButton, PriceBlock } from './BookingCommonComponents';

const BookingBody = () => {
  return (
    <div className="booking-body">
      <div className="booking-text-content">
        <h2 className="booking-title">рабочее время: пн — пт с 9:00 до 20:00 UTC+2</h2>
        <p className="booking-subtitle">Бронирование осуществляется по предоплате 100%. Перенос / отмена возможны за 24 часа до урока. В случае переноса или отмены менее чем за 24 часа до урока, предоплата не возвращается / урок списывается с абонемента.</p>
      </div>
      
      <div className="booking-schedule-section">
        <iframe id="koalendar" src="https://koalendar.com/e/veronika-franz-booking?embed=true" width="100%" height="800px" frameBorder="0" style={{'borderRadius': '0px', minWidth: '450px' }} />
      </div>
    </div>
  );
};

export default BookingBody;
