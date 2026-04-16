import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
                  <a href="mailto:gliffyxstdio@gmail.com" className="contact-link">gliffyxstdio@gmail.com</a>
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
                <div className="info-icon"><MapPin size={24} /></div>
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
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Project Subject</label>
                <input type="text" placeholder="Web Design" required />
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
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
