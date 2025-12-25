import React from 'react';
import './ClassesBody.scss';
import { ClassesButton, PriceBlock } from './ClassesCommonComponents';

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
            <li className="classes-help-list-item">атмосферные завтраки в историческом центре Лимассола,</li>
            <li className="classes-help-list-item">безопасная языковая среда,</li>
            <li className="classes-help-list-item">актуальные темы для обсуждений,</li>
            <li className="classes-help-list-item">проработка лексики в комьюнити like-minded girls.</li>
          </ul>
          <div className="price-block-wrapper">
            <PriceBlock prices={{ eu: 15, rub: 1500 }} />
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
            <div className="classes-reviews-cloud-wrapper">
              <div className="classes-revievs-cloud">
                <div className="classes-reviews-cloud-title">
                  НАТАЛЬЯ, 27 лет
                </div>
                <div className="classes-reviews-cloud-subtitle">
                  г. Самара
                  <br />
                  Elementary-Intermediate (2018-2020)
                </div>
                <div className="classes-reivews-cloud-line"></div>
                <div className="classes-reviews-cloud-description">
                «Самое сложное в английском — это начать, а если начал, то не бросить. Всегда найдётся причина, чтобы не заниматься. Спасибо, что втянула меня в обучение так, что уже два года я на английской волне. Теперь английский — это удовольствие!»
                </div>
              </div>
            </div>
            <div className="classes-reviews-cloud-wrapper">
              <div className="classes-revievs-cloud">
                <div className="classes-reviews-cloud-title">
                  НАТАЛЬЯ, 27 лет
                </div>
                <div className="classes-reviews-cloud-subtitle">
                  г. Самара
                  <br />
                  Elementary-Intermediate (2018-2020)
                </div>
                <div className="classes-reivews-cloud-line"></div>
                <div className="classes-reviews-cloud-description">
                «Самое сложное в английском — это начать, а если начал, то не бросить. Всегда найдётся причина, чтобы не заниматься. Спасибо, что втянула меня в обучение так, что уже два года я на английской волне. Теперь английский — это удовольствие!»
                </div>
              </div>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-2">
            <div className="classes-reviews-cloud-wrapper-full">
              <div className="classes-revievs-cloud-full">
                <div className="classes-reviews-cloud-title">
                  НАТАЛЬЯ, 27 лет
                </div>
                <div className="classes-reviews-cloud-subtitle">
                  г. Самара
                  <br />
                  Elementary-Intermediate (2018-2020)
                </div>
                <div className="classes-reivews-cloud-line"></div>
                <div className="classes-reviews-cloud-description">
                  «Я обучаюсь у Вероники уже почти год и результаты впечатляют. Уроки проходят интенсивно, интересно и с учётом моих целей и пробелов в знании языка. Благодаря грамотно составленному плану обучения, язык легче осваивается. Особенно нравится, что каждый урок мы разбираем актуальные темы и используем новые материалы — это позволяет оставаться в тонусе и не скучать.
                  <br /> <br />
                  Вероника — профессиональный и отзывчивый преподаватель, который всегда объясняет сложные моменты доступным языком (иногда много раз!). Очень рада, что нашла прекрасного педагога и рекомендую всем друзьям и знакомым, кто заинтересован в повышении своего уровня английского.»
                </div>
              </div>
            </div>
          </div>
          <div className="classes-reviews-cloud-grid-3">
            <div className="classes-reviews-cloud-wrapper-full">
              <div className="classes-revievs-cloud-full">
                <div className="classes-reviews-cloud-title">
                  НАТАЛЬЯ, 27 лет
                </div>
                <div className="classes-reviews-cloud-subtitle">
                  г. Самара
                  <br />
                  Elementary-Intermediate (2018-2020)
                </div>
                <div className="classes-reivews-cloud-line"></div>
                <div className="classes-reviews-cloud-description">
                  «Я обучаюсь у Вероники уже почти год и результаты впечатляют. Уроки проходят интенсивно, интересно и с учётом моих целей и пробелов в знании языка. Благодаря грамотно составленному плану обучения, язык легче осваивается. Особенно нравится, что каждый урок мы разбираем актуальные темы и используем новые материалы — это позволяет оставаться в тонусе и не скучать.
                  <br /> <br />
                  Вероника — профессиональный и отзывчивый преподаватель, который всегда объясняет сложные моменты доступным языком (иногда много раз!). Очень рада, что нашла прекрасного педагога и рекомендую всем друзьям и знакомым, кто заинтересован в повышении своего уровня английского.»
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesBody;
