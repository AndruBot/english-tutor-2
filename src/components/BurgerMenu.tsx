import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scaleDown as Menu } from 'react-burger-menu';
import './BurgerMenu.scss';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStateChange = (state: { isOpen: boolean | ((prevState: boolean) => boolean); }) => {
    setIsOpen(state.isOpen);
  };

  const getMenuWidth = () => {
    if (windowWidth >= 1200) {
      return '20%';
    } else if (windowWidth > 768 && windowWidth < 1200) {
      return '35%';
    } else {
      return '100%';
    }
  };

  return (
    <Menu
      right
      width={getMenuWidth()}
      isOpen={isOpen}
      onStateChange={handleStateChange}
      className="burger-menu-custom"
    >
      <Link id="home" className="menu-item" to="/" onClick={() => setIsOpen(false)}>HOME</Link>
      <Link id="about" className="menu-item" to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
      <Link id="classes" className="menu-item" to="/classes" onClick={() => setIsOpen(false)}>ABOUT CLASSES</Link>
      <Link id="faq" className="menu-item" to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
      <Link id="booking" className="menu-item" to="/booking" onClick={() => setIsOpen(false)}>SCHEDULE AND BOOKING</Link>
    </Menu>
  );
};

export default BurgerMenu;
