import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/main-logo.png';
import instgram_icon from '../Assets/tiktok.png';
import pintester_icon from '../Assets/facebook.png'; // Fixed incorrect icon path
import whatsapp_icon from '../Assets/instgram.png'; // Fixed incorrect icon path
import { Link } from 'react-router-dom'; // Import Link for routing

export const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-logo">
        <img src={footer_logo} alt='' />
      </div>
      <ul className='footer-links'>
        <li>
          <Link to="/">Home</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/franchise">Franchise</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/game">Game</Link> {/* Use Link for navigation */}
        </li>
      </ul>
      
      <div className="social2">
        <div >
         <a href="#"><img src={instgram_icon} alt='' /></a>
        </div>
        <div >
          <a href="#"><img src={pintester_icon} alt='' /></a>
        </div>
        <div >
            <a href="#"><img src={whatsapp_icon} alt='' /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - Bk</p>
      </div>
    </div>
  );
};
