import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutBody.scss';

import review1 from '/src/assets/review1.png';
import review2 from '/src/assets/review2.png';

const AboutBody = () => {
  return (
    <div className="about-body">
      <div className="about-text-content">
        <p className="about-paragraph about-paragraph-greeting">
          Всем привет ;)
        </p>
        <p className="about-paragraph about-paragraph-1">
          Я — Ника, лингвист-переводчик, преподаватель английского для взрослых и подростков от ~14 лет.
        </p>
        
        <p className="about-paragraph about-paragraph-2">
          <b>Образование:</b> СГСПУ, Направление «Перевод и переводоведение».
        </p>

        <p className="about-paragraph about-paragraph-3">
        Сдала экзамены <b>FCE</b> и <b>CAE</b> — уровни <b>UPPER-INTERMEDIATE (B2)</b> и <b>ADVANCED (С1)</b> и регулярно прохожу курсы повышения квалификации.
        </p>

        <div className="help-section">
          <h2 className="help-title">ПОМОГУ:</h2>
          <ul className="help-list">
            <li className="help-list-item">заговорить на современном английском языке,</li>
            <li className="help-list-item">побороть языковой барьер,</li>
            <li className="help-list-item">понимать речь на слух,</li>
            <li className="help-list-item">свободно формулировать мысли,</li>
            <li className="help-list-item">изучить грамматику.</li>
          </ul>
        </div>
        
        <p className="about-paragraph about-paragraph-4">
          Моё вдохновение — это путешествия и погружение в разные культуры. На сегодняшний день 
          я посетила 27 стран и мне есть, о чём рассказать. Сотрудничала с FIFA и Coca-Cola на Чемпионате мира по футболу 2018. Говорю на французском и немецком, изучаю греческий.
        </p>
        <p className="about-paragraph about-paragraph-5">
          Переехала из Самары и живу на солнечном Кипре.
        </p>
      </div>
      <div className="about-image-content">
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
        </Slider>
      </div>      
    </div>
  );
};

export default AboutBody;
