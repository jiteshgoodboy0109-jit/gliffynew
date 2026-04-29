import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import './Contact.css';

const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const dropdownOptions = [
  { value: 'webdesign', label: 'Web Design' },
  { value: 'seo', label: 'SEO' },
  { value: 'couple site', label: 'Couple Site' },
  { value: 'happy feedback', label: 'Happy Feedback' },
];

/* ── Custom Dropdown ── */
const CustomSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = dropdownOptions.find(o => o.value === value);

  return (
    <div className="custom-select-wrap" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        className={`custom-select-trigger${open ? ' open' : ''}${value ? ' has-value' : ''}`}
        onClick={() => setOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected ? selected.label : 'Select an option'}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </motion.span>
      </button>

      {/* Dropdown list */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="custom-select-list"
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {dropdownOptions.map((opt) => (
              <motion.li
                key={opt.value}
                role="option"
                aria-selected={value === opt.value}
                className={`custom-select-option${value === opt.value ? ' selected' : ''}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {value === opt.value && <span className="option-dot" />}
                {opt.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Main Contact Component ── */
const Contact = () => {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Let's Connect</h1>
            <p>Ready to start your next project? Get in touch with us today and let's make something amazing together.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:gliffyx.studio@gmail.com" className="contact-link">gliffyx.studio@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+918220945226" className="contact-link">+91 8220945226</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Instagram size={24} /></div>
                <div>
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/gliffyxstudio/" target="_blank" rel="noopener noreferrer" className="contact-link">@gliffyxstudio</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Madasamy" required />
              </div>
              <div className="form-group">
                <label>Project Subject</label>
                <CustomSelect value={selectedService} onChange={setSelectedService} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
