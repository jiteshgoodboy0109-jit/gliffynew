import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Send, Camera, Briefcase, Code } from 'lucide-react';
import logo from '../assets/logo 2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Gliffy.X Studio" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Connecting professionals since 2005. The global marketplace for IT, engineering and consultants.</p>
          <div className="social-links">
            <a href="#"><MessageSquare size={20} /></a>
            <a href="#"><Send size={20} /></a>
            <a href="#"><Camera size={20} /></a>
            <a href="#"><Briefcase size={20} /></a>
            <a href="#"><Code size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Platform</h4>
          <ul>
            <li><Link to="/projects">Find projects</Link></li>
            <li><Link to="/freelancers">Find freelancers</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/insights">Insights</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} freelancermap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
