import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo 3.png';
import './Footer.css';
import Strip from './Strip';

/* ── SVG Social Icons ── */
const Instagram = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

/* ── Animation Variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const quickLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'About Us',  to: '/about' },
  { label: 'Couple ❤',  to: '/Couple', active: true },
  { label: 'Contact',   to: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ── Top CTA Strip ── */}
      <Strip />

      {/* ── Main Body ── */}
      <div className="footer-body">
        <motion.div
          className="container footer-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >

          {/* Brand Column */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-glow">
                <img src={logo} alt="Gliffy.X Studio" className="footer-logo" />
              </div>
              <span className="footer-shop-name">Gliffy.X Studio</span>
            </Link>

            <p className="footer-tagline">
              Crafting premium digital experiences and innovative visual solutions that make brands unforgettable.
            </p>

            {/* Social Icons */}
            <div className="social-links">
              {[
                { href: 'https://www.instagram.com/gliffyxstudio/', label: 'Instagram', Icon: Instagram, color: '#E1306C' },
                { href: 'mailto:gliffyx.studio@gmail.com',          label: 'Email',     Icon: Mail,      color: '#9a4d9a' },
                { href: 'tel:+918220945226',                        label: 'Phone',     Icon: Phone,     color: '#25D366' },
              ].map(({ href, label, Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="social-icon"
                  whileHover={{ scale: 1.18, y: -4, backgroundColor: color, color: '#fff' }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{ '--hover-color': color }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul>
              {quickLinks.map(({ label, to, active }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`footer-nav-link${active ? ' active-footer-link' : ''}`}
                  >
                    <span className="link-arrow">→</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div className="footer-links footer-contact-col" variants={itemVariants}>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-items">
              {[
                { Icon: Mail,   href: 'mailto:gliffyx.studio@gmail.com', text: 'gliffyx.studio@gmail.com' },
                { Icon: Phone,  href: 'tel:+918220945226',               text: '+91 82209 45226' },
                { Icon: MapPin, href: null,                              text: 'Udumalpet · Pollachi · Coimbatore' },
              ].map(({ Icon, href, text }) => (
                <motion.div
                  key={text}
                  className="footer-contact-item"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="contact-icon-wrap"><Icon size={14} /></div>
                  {href
                    ? <a href={href}>{text}</a>
                    : <span>{text}</span>
                  }
                </motion.div>
              ))}
            </div>

            {/* Mini CTA inside footer */}
            <motion.div
              className="footer-mini-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/contact" className="footer-cta-pill">
                Start a Project <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Divider ── */}
      <motion.div
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* ── Bottom Bar ── */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {currentYear} Gliffy.X Studio. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Heart size={14} fill="#ff2d55" stroke="#ff2d55" style={{ margin: '0 4px' }} />
            </motion.span>
            in India
          </p>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;
