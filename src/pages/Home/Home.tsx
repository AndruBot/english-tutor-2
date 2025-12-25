import React from 'react';
import PageTemplate from '../../PageTemplate';
import '../../App.scss';
import HomeHeader from './components/HomeHeader';
import HomeBody from './components/HomeBody';
import HomeFooter from './components/HomeFooter';
import HomeMobileBody from './components/HomeMobileBody';
import HomeMobileMenu from './components/HomeMobileMenu';

const Home = () => {
  return (
    <PageTemplate pageClass="page-home">
      <div className="home-container">
        <HomeHeader />
        <HomeBody />
      </div>

      <div className='home-container home-mobile-container'>
        <HomeMobileBody />
        <HomeMobileMenu />
      </div>
    </PageTemplate>
  );
};

export default Home;
