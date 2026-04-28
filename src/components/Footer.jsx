import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, ArrowUpRight, Camera } from 'lucide-react';
import logo from '../assets/logo 3.png';
import './Footer.css';
import Strip from './Strip';

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="footer">

      {/* Top CTA Strip across all pages */}
      <Strip />

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="container footer-container">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={logo} alt="Gliffy.X Studio" className="footer-logo" />
              <span className="footer-shop-name">Gliffy.X Studio</span>
            </Link>
            <p className="footer-tagline">
              Crafting premium digital experiences and innovative visual solutions.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/gliffyxstudio/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:gliffyxstdio@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="tel:+918220945226" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Navigate Column */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/Couple" className="active-footer-link">Couple</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-links footer-contact-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Mail size={15} />
                <a href="mailto:gliffyx.studio@gmail.com">gliffyx.studio@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} />
                <a href="tel:+918220945226">+91 8220945226</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} />
                <span>Udumalpet, Pollachi, Coimbatore</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            &copy; {currentYear} Gliffy.X Studio. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} fill="#ff004f" stroke="#ff004f" className="footer-heart mx-1 animate-pulse" /> in India
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
