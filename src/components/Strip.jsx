import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './Strip.css';

const Strip = () => {
  return (
    <div className="cta-strip-wrapper">
      {/* Animated background shimmer */}
      <div className="strip-shimmer" aria-hidden="true" />

      <motion.div
        className="container cta-strip-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left — text */}
        <div className="cta-strip-left">
          <motion.span
            className="cta-strip-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Sparkles size={13} className="strip-spark" />
            READY TO CREATE SOMETHING BEAUTIFUL?
          </motion.span>
          <motion.h2
            className="cta-strip-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's bring your vision to life.
          </motion.h2>
        </div>

        {/* Right — button */}
        <motion.div
          className="cta-strip-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="cta-strip-btn">
              Book a Session
              <motion.span
                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Strip;
