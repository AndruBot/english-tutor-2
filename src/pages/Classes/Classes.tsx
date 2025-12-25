import React from 'react';
import PageTemplate from '../../PageTemplate';
import ClassesHeader from './components/ClassesHeader';
import ClassesBody from './components/ClassesBody';
import ClassesMobileBody from './components/ClassesMobileBody';
import './Classes.scss';

const Classes = () => {
  return (
    <PageTemplate
      header={<ClassesHeader />}
      pageClass="page-classes"
    >
      <div className="classes-container">
        <ClassesBody />
      </div>
      <div className="classes-mobile-container">
        <ClassesMobileBody />
      </div>
    </PageTemplate>
  );
};

export default Classes;
