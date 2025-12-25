import React from 'react';
import './FaqMobileBody.scss';
import teacherPhoto from '../../../assets/teacher.png';

const FaqMobileBody = () => {
  return (
    <div className="faq-mobile-body">
      <div className="faq-mobile-text-content">
        <div className="faq-questions">
          <div className="faq-question-block">
            <h2 className="faq-question">С КАКОГО УРОВНЯ МОЖНО НАЧИНАТЬ ЗАНИМАТЬСЯ?</h2>
            <p className="faq-answer">
              Я работаю со студентами любого уровня — от начального (Beginner) до продвинутого (Advanced). Независимо от вашего текущего уровня, вместе мы составим индивидуальный план, который обеспечит ваш постепенный и стабильный прогресс.
            </p>
          </div>

          <div className="faq-question-block">
            <h2 className="faq-question">МОЖНО ЛИ ЗАНИМАТЬСЯ В УДОБНОЕ ВРЕМЯ?</h2>
            <p className="faq-answer">
              Да, я предлагаю гибкое расписание занятий. В зависимости от вашей загруженности мы подберем наиболее подходящие дни и время для занятий.
            </p>
          </div>

          <div className="faq-question-block">
            <h2 className="faq-question">КАК ПРОХОДЯТ ОНЛАЙН-ЗАНЯТИЯ?</h2>
            <p className="faq-answer">
              Занятия проходят через Zoom, GoogleMeets или любую удобную вам платформу. Я использую интерактивные материалы, презентации и дополнительные ресурсы, чтобы поддерживать активное участие и эффективность обучения.
            </p>
          </div>

          <div className="faq-question-block">
            <h2 className="faq-question">КАК ЧАСТО НУЖНО ЗАНИМАТЬСЯ ДЛЯ ДОСТИЖЕНИЯ РЕЗУЛЬТАТА?</h2>
            <p className="faq-answer">
              Оптимальная частота занятий зависит от ваших целей и возможностей. Для заметного прогресса рекомендую заниматься 2-3 раза в неделю. Если нужно подготовиться к экзамену или проработать сложные аспекты языка, мы можем увеличить количество занятий.
            </p>
          </div>

          <div className="faq-question-block">
            <h2 className="faq-question">ПОМОГАЮ ЛИ Я С ПОДГОТОВКОЙ К ЭКЗАМЕНАМ?</h2>
            <p className="faq-answer">
              Да, я провожу подготовку к международным экзаменам, таким как IELTS, TOEFL, FCE, CAE и другим. Наши занятия включают практику всех форматов тестов и работу над навыками, необходимыми для успешной сдачи.
            </p>
          </div>

          <div className="faq-question-block">
            <h2 className="faq-question">ЕСТЬ ЛИ ПРОБНЫЙ УРОК?</h2>
            <p className="faq-answer">
              Да, я предлагаю пробный урок со скидкой 10%. Это прекрасная возможность познакомиться со мной, обсудить ваши цели и понять, подходит ли вам мой формат обучения.
            </p>
          </div>
        </div>
        <p className="faq-final-text">Я открыта для диалога и готова обсудить все детали, чтобы коммуникация в процессе обучения была максимально комфортной и продуктивной. Welcome!</p>
      </div>
    </div>
  );
};

export default FaqMobileBody;
