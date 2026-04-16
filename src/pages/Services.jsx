import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Services.css";

import phoneImg from "../assets/phone.png";
import laptopImg from "../assets/laptop.png";

const Service = () => {
  return (
    <div className="services-page">
      <section className="service-hero">
        <div className="service-container">

          {/* LEFT IMAGE (PHONE) */}
          <motion.div
            className="service-image-side"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={phoneImg} alt="phone" className="phone-mockup" />
          </motion.div>

          {/* CENTER CONTENT */}
          <div className="service-text">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Turn Your Ideas.<br />  Into Live Websites
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              “Launch Faster. Grow Smarter<br />,Stop Planning. Start Launching.”
            </motion.p>

            <motion.button
              className="service-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-signup">Start Creating </Link>
            </motion.button>
          </div>

          {/* RIGHT IMAGE (LAPTOP) */}
          <motion.div
            className="service-image-side"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src={laptopImg} alt="laptop" className="laptop-mockup" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service;