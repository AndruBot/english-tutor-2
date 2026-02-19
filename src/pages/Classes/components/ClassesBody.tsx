import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClassesBody.scss';
import { ClassesButton, PriceBlock } from './ClassesCommonComponents';
import {
  Review1Short, Review2Short, Review3Short, Review4Short, Review5Short, Review6Short,
  Review3Full, Review4Full, Review5Full, Review6Full, Review7Full, Review8Full,
  Review9Full, Review10Full, Review11Full,
} from './reviews';

const reviewCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const ClassesBody = () => {
  return (
    <div className="classes-body">
      <div className="classes-text-content">
        <div className="classes-paragraph">
          Выберите подходящий вариант обучения ;)
        </div>
        <div className="classes-help-section">
          <h2 className="classes-help-title">ENGLISH BREAKFAST CLUB</h2>
          <ul className="classes-help-list">
            <li className="classes-help-list-item">атмосферные завтраки в историческом центре Валенсии, </li>
            <li className="classes-help-list-item">безопасная языковая среда, </li>
            <li className="classes-help-list-item">актуальные темы для обсуждений,</li>
            <li className="classes-help-list-item">проработка лексики в комьюнити like-minded girls.</li>
          </ul>
          <div className="price-block-wrapper">
            <PriceBlock prices={{ eu: 10 }} />
          </div>
          <div className="classes-button-wrapper">
            <ClassesButton text="ВСТУПИТЬ В КЛУБ" link="https://forms.gle/fb5VYiNdF6pY13kr9" />
          </div>
        </div>

        <div className="classes-help-section">
          <h2 className="classes-help-title">GENERAL ENGLISH</h2>
          <ul className="classes-help-list">
            <li className="classes-help-list-item">разработка индивидуального плана обучения под цели,</li>
            <li className="classes-help-list-item">занятия в интерактивной форме,</li>
            <li className="classes-help-list-item">безграничный доступ к ресурсам Oxford and Cambridge,</li>
            <li className="classes-help-list-item">авторский Grammar Book в подарок.</li>
          </ul>
          <div className="price-block-wrapper">
            <PriceBlock prices={{ eu: 40, rub: 3500 }} />
          </div>
          <div className="classes-button-wrapper">
            <ClassesButton text="ЗАНИМАТЬСЯ ИНДИВИДУАЛЬНО" link="https://forms.gle/j1gCQdXcVb4nFehD7" />
          </div>
          <div className="classes-button-wrapper">
            <ClassesButton text="Задать другой вопрос" link="https://t.me/veronika_franz" btnClass="classes-ask-question-button" />
          </div>
        </div>
      </div>
      
      <div className="classes-reviews-section">
        <div className="classes-reviews-grid">
          <div className="classes-reviews-cloud-grid-1">
            <div className="classes-reviews-cloud-wrapper classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                <Review1Short key="1" />
                <Review2Short key="2" />
                <Review3Short key="3" />
              </Slider>
            </div>
            <div className="classes-reviews-cloud-wrapper classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                <Review4Short key="4" />
                <Review5Short key="5" />
                <Review6Short key="6" />
              </Slider>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-2">
            <div className="classes-reviews-cloud-wrapper-full classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                <Review3Full key="3" />
                <Review5Full key="5" />
                <Review6Full key="6" />
                <Review7Full key="7" />
                <Review8Full key="8" />
              </Slider>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-3">
            <div className="classes-reviews-cloud-wrapper-full classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                <Review4Full key="4" />
                <Review9Full key="9" />
                <Review10Full key="10" />
                <Review11Full key="11" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesBody;
