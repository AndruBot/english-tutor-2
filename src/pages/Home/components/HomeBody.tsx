import React from 'react';
import './HomeBody.scss';
import teacher from '/src/assets/teacher.png';

const HomeBody = () => {
  return (
    <div className="home-body">
      <div className="text-section">
        <p className='home-body-title'>HELLO, <span className="title-no-wrap">I`M NIKA</span></p>
        <p className='home-body-subtitle'>ЛИНГВИСТ-ПЕРЕВОДЧИК, ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО ЯЗЫКА ДЛЯ ВЗРОСЛЫХ И ПОДРОСТКОВ</p>
      </div>
      <div className="image-section">
        <img src={teacher} alt="Nika Churikova" />
      </div>
    </div>
  );
};

export default HomeBody;
