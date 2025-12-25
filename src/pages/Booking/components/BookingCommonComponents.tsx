import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const BookingButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="booking-button" onClick={onClick}>
      {text}
    </button>
  );
};

export const PriceBlock = ({ prices }: { prices: { eu: number, rub: number } }) => (
  <div className="price-block">
    <div className="price-row">
      <span className="price-amount">{prices.eu}€</span>
      <span className="price-separator">/</span>
      <span className="price-amount">{prices.rub}₽</span>
    </div>
  </div>
);
