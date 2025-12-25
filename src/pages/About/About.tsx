import React from 'react';
import PageTemplate from '../../PageTemplate';
import AboutHeader from './components/AboutHeader';
import AboutBody from './components/AboutBody';
import AboutMobileBody from './components/AboutMobileBody';
import './About.scss';

const About = () => {
  return (
    <PageTemplate header={<AboutHeader />} pageClass="page-about">
      <div className="about-container">
        <AboutBody />
      </div>
      <div className='about-container about-mobile-container'>
        <AboutMobileBody />
      </div>
    </PageTemplate>
  );
};

export default About;
