import React from 'react';
import './BookingMobileBody.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviewsData = [
  {
    name: 'НАТАЛЬЯ',
    age: 27,
    location: 'г. Самара',
    period: 'Elementary-Intermediate (2018-2020)',
    description: '«Самое сложное в английском — это начать, а если начал, то не бросить. Всегда найдётся причина, чтобы не заниматься. Спасибо, что втянула меня в обучение так, что уже два года я на английской волне. Теперь английский — это удовольствие!»',
  },
  {
    name: 'АННА',
    age: 30,
    location: 'г. Москва',
    period: 'Pre-Intermediate (2020-2022)',
    description: '«Вероника — прекрасный преподаватель! Занятия проходят очень интересно и продуктивно. Мой английский значительно улучшился, и я чувствую себя гораздо увереннее. Очень рекомендую!»',
  }
];

// Arrow components must be defined before they are used in sliderSettings
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-20px' }}
      onClick={onClick}
    >
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L9 9L1 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-20px' }}
      onClick={onClick}
    >
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
};

const BookingMobileBody = () => {
  return (
    <>
      <div className="booking-mobile-body">
        <div className="booking-mobile-content-wrapper">
          <div className="booking-mobile-text-content">
            <h2 className="booking-mobile-title">Выбрать удобное время и забронировать 
            свободный слот можно тут:</h2>
          </div>
          
          <div className="booking-mobile-schedule-section">
            <iframe allowFullScreen id="koalendar" src="https://koalendar.com/e/veronika-franz-booking?embed=true" width="100%" height="800px" frameBorder="0" style={{'borderRadius': '0px' }} />
          </div>

          <div className="booking-mobile-text-content">
            <p className="booking-mobile-subtitle">Бронирование осуществляется по предоплате 100%. Перенос или отмена возможны за 24 часа до урока. В случае переноса или отмены менее чем за 24 часа до урока, предоплата не возвращается / урок списывается с абонемента.</p>
            <p className="booking-mobile-subtitle-time">рабочее время: пн — пт с 9:00 до 20:00 UTC+2</p>
          </div>
        </div>
      </div>

      {/* Reviews Slider */}
      <div className='booking-mobile-reviews-section-wrapper'>
        <div className="booking-mobile-reviews-section">
          <div className="booking-mobile-reviews-title-background" />
          <Slider {...sliderSettings}>
            {reviewsData.map((review, index) => (
              <div key={index} className="booking-reviews-cloud-wrapper">
                <div className="booking-revievs-cloud">
                  <div className="booking-reviews-cloud-title">
                    {review.name}, {review.age} лет
                  </div>
                  <div className="booking-reviews-cloud-subtitle">
                    {review.location}
                    <br />
                    {review.period}
                  </div>
                  <div className="booking-reivews-cloud-line"></div>
                  <div className="booking-reviews-cloud-description">
                    {review.description}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BookingMobileBody;
