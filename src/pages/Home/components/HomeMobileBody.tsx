import React from 'react';
import teacher from '/src/assets/teacher_crop.png';

const HomeMobileBody = () => {
  return (
    <div className="home-mobile-body">
      <div className="mobile-header">
        <p className='mobile-header-title'>HELLO<br /><span className="title-no-wrap">I`M NIKA</span></p>
        <p className='mobile-header-subtitle'>ЛИНГВИСТ-ПЕРЕВОДЧИК, ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО ЯЗЫКА ДЛЯ ВЗРОСЛЫХ И ПОДРОСТКОВ</p>
      </div>
      <div className="mobile-image">
        <img src={teacher} alt="Nika Churikova" />
      </div>
    </div>
  );
};

export default HomeMobileBody;
