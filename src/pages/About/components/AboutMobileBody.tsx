import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutMobileBody.scss';

import review1 from '/src/assets/review1.png';
import review2 from '/src/assets/review2.jpg';
import review3 from '/src/assets/review3.jpg';
import review4 from '/src/assets/review4.jpg';
import review5 from '/src/assets/review5.png';
import review6 from '/src/assets/review6.jpg';

const AboutMobileBody = () => {
  return (
    <div className="about-mobile-body">
      <div className="about-mobile-text-content">
        <p className="about-mobile-paragraph about-mobile-paragraph-greeting">
          Всем привет ;)
        </p>
        <p className="about-mobile-paragraph about-mobile-paragraph-1">
          Я — Ника, лингвист-переводчик, преподаватель английского для взрослых и подростков от ~14 лет.
        </p>
        
        <p className="about-mobile-paragraph about-mobile-paragraph-2">
          <b>Образование:</b> СГСПУ, Направление «Перевод и переводоведение».
        </p>

        <p className="about-mobile-paragraph about-mobile-paragraph-3">
          Сдала экзамены <b>FCE</b> и <b>CAE</b> — уровни <b>UPPER-INTERMEDIATE (B2)</b> и <b>ADVANCED (С1)</b> и регулярно прохожу курсы повышения квалификации.
        </p>

        <div className="help-mobile-section">
          <h2 className="help-mobile-title">ПОМОГУ:</h2>
          <ul className="help-mobile-list">
            <li className="help-mobile-list-item">заговорить на современном английском языке,</li>
            <li className="help-mobile-list-item">побороть языковой барьер,</li>
            <li className="help-mobile-list-item">понимать речь на слух,</li>
            <li className="help-mobile-list-item">свободно формулировать мысли,</li>
            <li className="help-mobile-list-item">изучить грамматику.</li>
          </ul>
        </div>

        <div className="about-mobile-image-content">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={5000}
            arrows={false}
            className="review-carousel"
          >
            <div className="review-slide">
              <img src={review1} alt="Review 1" className="review-image" />
            </div>
            <div className="review-slide">
              <img src={review2} alt="Review 2" className="review-image" />
            </div>
            <div className="review-slide">
              <img src={review3} alt="Review 3" className="review-image" />
            </div>
            <div className="review-slide">
              <img src={review4} alt="Review 4" className="review-image" />
            </div>
            <div className="review-slide">
              <img src={review5} alt="Review 5" className="review-image" />
            </div>
            <div className="review-slide">
              <img src={review6} alt="Review 6" className="review-image" />
            </div>
          </Slider>
        </div>  
        
        <p className="about-mobile-paragraph about-mobile-paragraph-4">
          Моё вдохновение — это путешествия и погружение в разные культуры. На сегодняшний день 
          я посетила 28 стран и мне есть, о чём рассказать. Сотрудничала с FIFA и Coca-Cola на Чемпионате мира по футболу 2018. Говорю на французском и немецком, изучаю греческий и испанский.

          Переехала из Самары, несколько лет прожила на солнечном Кипре и сейчас нахожусь в Валенсии.
        </p>
        <p className="about-mobile-paragraph about-mobile-paragraph-5">
          Переехала из Самары и живу в солнечной Валенсии.
        </p>
      </div>    
    </div>
  );
};

export default AboutMobileBody;
