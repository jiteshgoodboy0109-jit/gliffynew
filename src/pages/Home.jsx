import { motion } from 'framer-motion';
import { Search, Palette, Rocket } from 'lucide-react';

import './Home.css';
import heroImg from '../assets/glify model.png';

const Home = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      title: "Discovery",
      desc: "We dive deep into your brand's DNA to uncover unique opportunities and define a clear roadmap for success.",
      color: "#f5f3ff"
    },
    {
      icon: <Palette size={32} />,
      title: "Design",
      desc: "Our artists craft visually stunning, high-performance interfaces tailored to engage and convert your audience.",
      color: "#fef2f2"
    },
    {
      icon: <Rocket size={32} />,
      title: "Launch",
      desc: "We ship your project with precision while optimizing every pixel for speed, SEO, and long-term growth.",
      color: "#ecfdf5"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <motion.img
              src={heroImg}
              alt="Digital Design Studio"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </div>

          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              “Bring Your . <br /> Vision <span className="shine-text">Online</span>.”
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The platform for Web Design, Graphics, UI/UX, and SEO.<br />
            </motion.p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          <motion.div
            className="process-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How We Perfect Your Project</h2>
            <p className="section-subtitle">A proven 3-step workflow designed for excellence.</p>
          </motion.div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="step-number">0{index + 1}</div>
                <div className="process-icon" style={{ backgroundColor: step.color }}>
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
