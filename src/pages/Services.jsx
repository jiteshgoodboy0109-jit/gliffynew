import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Camera, Layers, Heart } from "lucide-react";
import "./Services.css";

import phoneImg from "../assets/phone.png";
import laptopImg from "../assets/laptop.png";

const Service = () => {
  const roadmapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // PREMIUM AUTO-SCROLL GESTURE (SLOWER)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (roadmapRef.current && window.lenis) {
        window.lenis.scrollTo(roadmapRef.current, {
          duration: 3.5, // Ultra-slow and premium
          offset: -50,   // Stop slightly before the section for better framing
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }, 1800); // Slightly more delay to settle the hero first

    return () => clearTimeout(timer);
  }, []);

  const roadmapItems = [
    {
      title: "Web Designing (SEO)",
      desc: "Creating lightning-fast, SEO-optimized websites that rank #1. We focus on conversion, speed, and clean code to grow your business.",
      icon: <Monitor size={40} />,
      side: "left"
    },
    {
      title: "Graphic Designing",
      desc: "Bold branding and eye-catching visuals. From logos to social media kits, we craft a unique identity that makes your brand unforgettable.",
      icon: <Camera size={40} />,
      side: "right"
    },
    {
      title: "UI/UX Design",
      desc: "User-centered interfaces designed for seamless experiences. We bridge the gap between beauty and usability for maximum impact.",
      icon: <Layers size={40} />,
      side: "left"
    },
    {
      title: "Couple Webpages",
      desc: "Making your special moments eternal with our highly customized and emotional digital experiences.",
      bullets: [
        "Proposal Web Full Optimization: Magical storytelling for your 'Yes' moment.",
        "Birthday Surprise: Interactive digital boxes and memory lanes.",
        "Sorry Webpages: Cuteness overloaded designs to melt any heart."
      ],
      icon: <Heart size={40} />,
      side: "right"
    }
  ];

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
              Turn Your Ideas.<br /> Into Live Websites
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

      {/* OUR WORKS ROADMAP SECTION */}
      <section className="roadmap-section" ref={roadmapRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Specialization :</h2>
            <p className="section-subtitle">A dynamic journey from concept to digital perfection.</p>
          </motion.div>

          <div className="roadmap-container">
            {/* ORGANIC HAND-DRAWN INK PATH (SVG) */}
            <svg className="roadmap-svg-ink" viewBox="0 0 200 1200" preserveAspectRatio="none">
              {/* Removed high intensity filter for a cleaner, accurate line */}

              {/* Wavy Ink Road (Background) */}
              <path
                d="M 100 0 
                   C 25 150, 25 150, 100 300 
                   C 175 450, 175 450, 100 600
                   C 25 750, 25 750, 100 900
                   C 175 1050, 175 1050, 100 1200"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Animated Ink Stroke (Scroll-Synced) */}
              <motion.path
                d="M 100 0 
                   C 25 150, 25 150, 100 300 
                   C 175 450, 175 450, 100 600
                   C 25 750, 25 750, 100 900
                   C 175 1050, 175 1050, 100 1200"
                fill="none"
                stroke="#111"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            {roadmapItems.map((item, index) => {
              const keywords = ["PRECISION", "IDENTITY", "EXPERIENCE", "EMOTION"];
              return (
                <motion.div
                  key={index}
                  className={`roadmap-item ${item.side}`}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* ALTERNATIVE DECORATIVE ELEMENTS (STUDIO AURA) */}
                  <div className="roadmap-decorator">
                    <span className="vertical-keyword">{keywords[index]}</span>
                    <motion.div
                      className="aura-orb"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1
                      }}
                    />
                  </div>

                  <div className="roadmap-card">
                    <div className="roadmap-icon">{item.icon}</div>
                    <div className="roadmap-content">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      {item.bullets && (
                        <ul className="roadmap-bullets">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx}>
                              <Heart size={14} className="bullet-icon" /> {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="roadmap-dot"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SIMPLE BUTTON CTA */}
      <section className="service-simple-cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/contact" className="simple-animated-btn">
            Start Your Project
            <div className="btn-glow"></div>
            <motion.span
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >→</motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Service;