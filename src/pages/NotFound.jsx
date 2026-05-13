import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="nf-glow" />
      
      <motion.div 
        className="nf-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="nf-404"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }}
        >
          404
        </motion.h1>
        
        <h2 className="nf-title">Lost in the Digital Ether?</h2>
        <p className="nf-text">
          The page you're looking for has vanished into thin air. 
          Don't worry, even the best designs get lost sometimes.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn primary">
            <Home size={18} /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="nf-btn secondary">
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="nf-decorations">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="nf-orb"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
