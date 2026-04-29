import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo 3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="brand-link" onClick={() => setIsOpen(false)}>
            <motion.img
              src={logo}
              alt="Gliffy.X "
              className="navbar-logo"
              whileHover={{ rotate: 5, scale: 1.1 }}
            />
            <motion.span
              className="company-name"
              whileHover={{ x: 5 }}
            >
              Gliffy.X 
            </motion.span>
          </Link>
        </motion.div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/couple" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}><b className='text-purple-500' style={{ color: "#ff4d6d" }} >Couple ❤</b></NavLink></li>
          </ul>

          <div className="nav-actions">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-signup">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
