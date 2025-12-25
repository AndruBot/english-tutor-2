import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  /**
   * Target URL for the link. If omitted, defaults to '#'.
   */
  link?: string;
  /** Additional CSS class for the button */
  btnClass?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const ClassesButton: React.FC<ButtonProps> = ({ text, link = '#', btnClass = '', onClick }) => {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className={'classes-button ' + btnClass} onClick={onClick}>
        {text}
      </button>
    </Link>
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
