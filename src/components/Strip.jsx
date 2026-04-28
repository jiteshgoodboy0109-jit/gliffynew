import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Strip.css';

const Strip = () => {
  return (
    <div className="cta-strip-wrapper">
      <motion.div 
        className="container cta-strip-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="cta-strip-left">
          <span className="cta-strip-subtitle">READY TO CREATE SOMETHING BEAUTIFUL?</span>
          <h2 className="cta-strip-title">Let's bring your vision to life.</h2>
        </div>
        <div className="cta-strip-right">
          <Link to="/contact" className="cta-strip-btn">
            Book a Session <ArrowUpRight size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Strip;
