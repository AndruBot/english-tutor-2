import React from 'react';
import { Link } from 'react-router-dom';
import './FaqHeader.scss';
import BurgerMenu from '../../../components/BurgerMenu';

const FaqHeader = () => {
  return (
    <header className="faq-header">
      <div className="faq-header-content">
        <h1 className="faq-header-title desktop-only">FAQ</h1>
        <h1 className="faq-header-title mobile-only">FAQ</h1>
        <Link to="https://t.me/veronika_franz" className="faq-ask-question-button" target='_blank'>
          ЗАДАТЬ ДРУГОЙ ВОПРОС
        </Link>
      </div>
      <div className="burger-menu">
          <BurgerMenu />
      </div>
    </header>
  );
};

export default FaqHeader;
