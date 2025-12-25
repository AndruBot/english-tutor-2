import React from 'react';
import teacher from '/src/assets/teacher.png';

const HomeMobileBody = () => {
  return (
    <div className="home-mobile-body">
      <div className="mobile-header">
        <p className='mobile-header-title'>HELLO<br />I`M Nika</p>
        <p className='mobile-header-subtitle'>ЛИНГВИСТ-ПЕРЕВОДЧИК, ПРЕПОДАВАТЕЛЬ АНГЛИЙСКОГО ЯЗЫКА ДЛЯ ВЗРОСЛЫХ И ПОДРОСТКОВ</p>
      </div>
      <div className="mobile-image">
        <img src={teacher} alt="Nika Churikova" />
      </div>
    </div>
  );
};

export default HomeMobileBody;
