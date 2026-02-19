import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-break'/>
      <div className="footer-content">
        <div className="footer-sign">
          ©2026 NIKA CHURIKOVA
        </div>
        <div className="footer-socials">
          <div className="social-links">
            <a target="_blank" href="https://www.instagram.com/Veronika_franz/" className="social-link">Instagram</a>
            <a target="_blank" href="https://t.me/veronika_franz" className="social-link">Telegram</a>
            <a target="_blank" href="https://vk.com/veronika_franz" className="social-link">VK</a>
          </div>
        </div>
      </div>
      <div className='footer-break'/>
    </footer>
  );
};

export default Footer;