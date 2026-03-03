import React from 'react';
import './ClassesMobileBody.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ClassesButton, PriceBlock } from './ClassesCommonComponents';
import {
  Review1Short,
  Review2Short,
  Review3Short,
  Review4Short,
  Review5Short,
  Review6Short,
} from './reviews';

// Arrow components must be defined before they are used in sliderSettings
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-40px' }}
      onClick={onClick}
    >
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L1 17" stroke="#888" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-40px' }}
      onClick={onClick}
    >
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="#888" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  autoplay: true,
  autoplaySpeed: 15000,
};



const ClassesMobileBody = () => {
  return (
    <>
      <div className="classes-mobile-body">
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
      </div>
      
      {/* Mobile reviews slider - same 6 short reviews as desktop */}
      <div className="classes-mobile-reviews-section-wrapper">
        <div className="classes-mobile-reviews-section">
          <Slider {...sliderSettings}>
            <div className="classes-reviews-cloud-wrapper">
              <Review1Short />
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <Review2Short />
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <Review3Short />
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <Review4Short />
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <Review5Short />
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <Review6Short />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ClassesMobileBody;
