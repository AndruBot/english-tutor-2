import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ClassesBody.scss';
import { ClassesButton, PriceBlock } from './ClassesCommonComponents';

const reviewCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
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
                {[1, 2, 3].map((i) => (
                  <div key={i} className="classes-revievs-cloud">
                    <div className="classes-reviews-cloud-title">
                      Илья, 34, проджект-менеджер
                    </div>
                    <div className="classes-reviews-cloud-subtitle">
                      г. Лимассол, Кипр
                      <br />
                      Pre-intermediate-Intermediate (2023-2026)
                    </div>
                    <div className="classes-reivews-cloud-line"></div>
                    <div className="classes-reviews-cloud-description">
                      «Мне нравится, что каждое занятие проходит без зубрежки, в игровой форме.
                      <br /><br />
                      Поскольку я руководитель в интернациональной команде, самое полезное для меня было изучение have to /must / should и able to, managed to. Применяю это каждый день в работе.»
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="classes-reviews-cloud-wrapper classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="classes-revievs-cloud">
                    <div className="classes-reviews-cloud-title">
                      Евгений, 38, разработчик
                    </div>
                    <div className="classes-reviews-cloud-subtitle">
                      г. Кейптаун, ЮАР
                      Pre-intermediate-Intermedaite (2021)
                      <br />
                    </div>
                    <div className="classes-reivews-cloud-line"></div>
                    <div className="classes-reviews-cloud-description">
                      «За полгода я успел пройти полностью
                      курс Intermediate от Oxford.
                      Результатом очень доволен! Теперь я
                      свободно путешествую, занимаюсь онлайн
                      и не боюсь завести разговор с местнымми
                      жителями.
                      <br /><br />
                      Nika, thank you! Keep in touch!»
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-2">
            <div className="classes-reviews-cloud-wrapper-full classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="classes-revievs-cloud-full">
                    <div className="classes-reviews-cloud-title">
                      Полина, 22, тату-мастер, гончар
                    </div>
                    <div className="classes-reviews-cloud-subtitle">
                      г. Санкт-Петербург, Россия
                      <br />
                      Elementary-Intermediate Plus (2021-...)
                    </div>
                    <div className="classes-reivews-cloud-line"></div>
                    <div className="classes-reviews-cloud-description">
                      «Люблю и жду наши занятия как в первый раз! Всё так же ухожу с чувством счастья и удовлетворенности после наших встреч.
                      Наш формат, конечно, сильно меняется за столько лет, например, сейчас мы много болтаем, но это классно, ведь раньше я бы не смогла так много говорить и рассуждать о всяком.
                      <br /> <br />
                      Мне очень нравится твой творческий подход к оформлению материалов и выбор тем, на основе которых мы все это изучаем — очень ценю твою гибкость и чуткость.
                      Живые диалоги, творческие домашки и свобода выбора тем по интересам - любимое!»
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-3">
            <div className="classes-reviews-cloud-wrapper-full classes-review-carousel">
              <Slider {...reviewCarouselSettings}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="classes-revievs-cloud-full">
                <div className="classes-reviews-cloud-title">
                  Евгения, 26, COO
                </div>
                <div className="classes-reviews-cloud-subtitle">
                  г. Лимассол, Кипр
                  <br />
                  Pre-intermediate–Intermediate (2024-...)
                </div>
                <div className="classes-reivews-cloud-line"></div>
                <div className="classes-reviews-cloud-description">
                  «Я постоянно меняла репетиторов по английскому, и вот уже чуть больше двух лет занимаюсь с Никой  и за всё это время это самые комфортные занятия. Ника всегда очень доброжелательна, терпеливая и внимательная, и даже когда я не могу прийти на занятие, она всегда подстраивается под мой график.
                  <br /> <br />
                  Благодаря тому, что Ника подбирает уроки индивидуально под каждого ученика, мне действительно интересно и удобно заниматься. За два года я значительно увеличила словарный запас, мне стало гораздо легче говорить.
                  <br /><br />
                  Раньше у меня были проблемы с восприятием информации на слух, а сейчас стало намного проще.
                  <br />
                  Ника топчик ❤️»
                </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesBody;
