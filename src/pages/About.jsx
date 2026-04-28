import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Layers, Cpu, GitBranch, Sparkles } from 'lucide-react';
import './About.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
});

const services = [
  {
    num: '01',
    name: 'Visual Design Systems',
    desc: 'Cohesive, scalable systems that keep every element in perfect harmony across your product.',
    icon: <Layers size={28} />,
    size: 'large',
  },
  {
    num: '02',
    name: 'UI / UX Concepts',
    desc: 'Interfaces that feel natural. Experiences that convert.',
    icon: <Cpu size={28} />,
    size: 'small',
  },
  {
    num: '03',
    name: 'Workflow Visualization',
    desc: 'Complex processes made crystal clear through structured, beautiful diagrams.',
    icon: <GitBranch size={28} />,
    size: 'small',
  },
  {
    num: '04',
    name: 'Creative Digital Solutions',
    desc: 'Custom-built digital experiences tailored to your vision and audience.',
    icon: <Sparkles size={28} />,
    size: 'large',
  },
];

const pillars = [
  'Clarity over complexity.',
  'Design that solves, not just decorates.',
  'Precision in every pixel.',
];

const About = () => (
  <div className="about-page">

    {/* ── 1. HERO ─────────────────────────────────────── */}
    <section className="a-hero">
      <motion.h1
        className="a-hero-line"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        We turn complex ideas<br />into visual clarity.
      </motion.h1>
      <motion.div
        className="a-hero-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>

    {/* ── 2. WHO WE ARE ────────────────────────────────── */}
    <section className="a-who">
      <div className="a-who-inner">
        <motion.div className="a-who-left" {...fadeUp(0)}>
          <span className="a-who-num">03</span>
          <span className="a-who-label">Core Identity</span>
        </motion.div>
        <div className="a-who-right">
          {pillars.map((pillar, idx) => (
            <motion.p key={idx} className="a-pillar" {...fadeUp(0.1 + idx * 0.1)}>
              <span className="a-pillar-dot" />
              {pillar}
            </motion.p>
          ))}
        </div>
      </div>
    </section>

    {/* ── 3. WHAT WE DO ────────────────────────────── */}
    <section className="a-services">
      <div className="a-services-header">
        <motion.span className="a-section-label" {...fadeUp(0)}>Capabilities</motion.span>
        <motion.h2 className="a-services-title" {...fadeUp(0.1)}>
          Everything you need to <br />bring your vision to life.
        </motion.h2>
      </div>

      <div className="a-bento-grid">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            className={`a-bento-card ${svc.size === 'large' ? 'a-bento-large' : ''}`}
            {...fadeUp(0.1 + idx * 0.1)}
          >
            <div className="a-bento-top">
              <div className="a-bento-icon">{svc.icon}</div>
              <span className="a-bento-num">{svc.num}</span>
            </div>
            <div className="a-bento-content">
              <h3 className="a-bento-name">{svc.name}</h3>
              <p className="a-bento-desc">{svc.desc}</p>
            </div>
            <div className="a-bento-arrow">
              <ArrowRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── 4. MISSION & VISION ─────────────────────────── */}
    <section className="a-services" style={{ background: '#f6f5f3', padding: '0' }}>
      <div className="a-pillars">
        <motion.div className="a-pillar-card" {...fadeUp(0)}>
          <Target className="a-card-icon" size={32} />
          <h3>Our Mission</h3>
          <p>To eliminate friction between great ideas and their audiences through uncompromising design.</p>
        </motion.div>
        <motion.div className="a-pillar-card" {...fadeUp(0.1)}>
          <Zap className="a-card-icon" size={32} />
          <h3>Our Vision</h3>
          <p>A digital landscape where every interaction feels intentional, effortless, and beautifully intuitive.</p>
        </motion.div>
      </div>
    </section>

    {/* ── 5. CLOSING ──────────────────────────────────── */}
    <section className="a-closing">
      <motion.h2 className="a-quote" {...fadeUp(0)}>
        "Good design is obvious. Great design is transparent."
      </motion.h2>
      <motion.div {...fadeUp(0.2)}>
        <Link to="/contact" className="a-closing-link">
          Start a project <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>

  </div>
);

export default About;
