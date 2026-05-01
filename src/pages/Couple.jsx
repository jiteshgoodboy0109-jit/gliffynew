import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ShoppingCart, Sparkles, ArrowRight } from 'lucide-react';
import './Couple.css';

const WHATSAPP = '918220945226';

const FLAMES_EMOJIS = {
    Friends: '🤝', Lovers: '💘', Affection: '🫂',
    Marriage: '💍', Enemies: '⚔️', Siblings: '👫'
};

const PRODUCTS = [
    {
        id: 'proposal', emoji: '💍', title: 'Proposal Page',
        tagline: 'Ask the question that changes everything.',
        desc: 'A beautifully crafted webpage that tells your love story and pops the question in the most magical way possible.',
        features: ['Custom love story', 'Music integration', 'Photo gallery', 'Interactive Yes/No'],
        price: '₹299', color: '#9d4edd', glow: 'rgba(157,78,221,0.5)',
    },
    {
        id: 'birthday', emoji: '🎂', title: 'Birthday Page',
        tagline: "A birthday surprise they'll never forget.",
        desc: 'Interactive digital gift that unfolds memories, wishes, and surprises as they scroll through.',
        features: ['Photo timeline', 'Birthday countdown', 'Surprise reveals', 'Custom music'],
        price: '₹249', color: '#FF4D6D', glow: 'rgba(255,77,109,0.5)',
    },
    {
        id: 'sorry', emoji: '🥺', title: 'Sorry Page',
        tagline: "Because sometimes words aren't enough.",
        desc: 'A heartfelt webpage that conveys your apology with sincerity, warmth, and depth.',
        features: ['Emotional storytelling', 'Custom message', 'Memory gallery', 'Animated elements'],
        price: '₹199', color: '#c77dff', glow: 'rgba(199,125,255,0.5)',
    },
];

const QUIZ_QUESTIONS = [
    {
        q: "How do you usually show your affection?",
        opts: [
            { text: "Planning a big surprise 🎉", type: "birthday" },
            { text: "Making a grand, heartfelt promise 💍", type: "proposal" },
            { text: "Saying 'I'm here for you, always' 🫂", type: "sorry" }
        ]
    },
    {
        q: "What does your ideal weekend look like?",
        opts: [
            { text: "Celebrating life with friends & fun 🥳", type: "birthday" },
            { text: "A deeply romantic, candle-lit evening ✨", type: "proposal" },
            { text: "A cozy night in, just focusing on us 🛋️", type: "sorry" }
        ]
    },
    {
        q: "Which phrase resonates with you most right now?",
        opts: [
            { text: "Let's make this your best day ever! 🎂", type: "birthday" },
            { text: "You are my today and all my tomorrows. ❤️", type: "proposal" },
            { text: "I just want to see you smile again. 🥺", type: "sorry" }
        ]
    }
];

const FLOAT_HEARTS = [
    { left: '7%', size: 14, opacity: 0.10, dur: 13, delay: 0 },
    { left: '20%', size: 10, opacity: 0.07, dur: 16, delay: 4 },
    { left: '36%', size: 18, opacity: 0.09, dur: 11, delay: 7 },
    { left: '53%', size: 11, opacity: 0.06, dur: 15, delay: 2 },
    { left: '68%', size: 15, opacity: 0.10, dur: 12, delay: 5 },
    { left: '82%', size: 12, opacity: 0.08, dur: 14, delay: 1 },
    { left: '91%', size: 16, opacity: 0.07, dur: 17, delay: 8 },
];

export default function CouplePage() {
    const [cart, setCart] = useState([]);
    const [modal, setModal] = useState(null);
    const [popup, setPopup] = useState(null);

    const [cartBounce, setCartBounce] = useState(false);
    const [petals, setPetals] = useState(false);

    const [activePetals, setActivePetals] = useState([]);

    // Hover effect helpers
    const handleBtnEnter = () => {}; 
    const handleBtnLeave = () => {};

    const [bName, setBName] = useState('');
    const [gName, setGName] = useState('');
    const [flameStatus, setFlameStatus] = useState('idle');
    const [flameResult, setFlameResult] = useState('');
    const [loadingText, setLoadingText] = useState('');

    // Quiz State
    const [quizStep, setQuizStep] = useState(0);
    const [quizScores, setQuizScores] = useState({ proposal: 0, birthday: 0, sorry: 0 });
    const [quizResult, setQuizResult] = useState(null);

    const handleQuizAnswer = (type) => {
        setQuizScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
        setQuizStep(prev => prev + 1);
    };

    useEffect(() => {
        if (quizStep === QUIZ_QUESTIONS.length + 1) {
            const winner = Object.keys(quizScores).reduce((a, b) => quizScores[a] > quizScores[b] ? a : b);
            const product = PRODUCTS.find(p => p.id === winner);
            setQuizResult(product);
        }
    }, [quizStep, quizScores]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Spawn trailing petals
            if (Math.random() > 0.85) {
                spawnPetal(e.clientX, e.clientY, 'trail');
            }
        };

        const handleGlobalClick = (e) => {
            // Explosion effect
            for (let i = 0; i < 12; i++) {
                spawnPetal(e.clientX, e.clientY, 'burst');
            }
        };

        const spawnPetal = (x, y, type) => {
            const id = Math.random();
            const petal = {
                id,
                x,
                y,
                size: Math.random() * (type === 'burst' ? 15 : 20) + 10,
                color: ['#FF4D6D', '#FFC0CB', '#ffb3c1'][Math.floor(Math.random() * 3)],
                rotation: Math.random() * 360,
                vx: (Math.random() - 0.5) * (type === 'burst' ? 8 : 2),
                vy: (Math.random() * 2) + (type === 'burst' ? -4 : 1),
                rotationSpeed: (Math.random() - 0.5) * 10,
                opacity: Math.random() * 0.3 + 0.4,
                blur: Math.random() > 0.7 ? '2px' : '0px',
                life: 1
            };

            setActivePetals(prev => {
                const next = [...prev, petal];
                if (next.length > 60) return next.slice(1);
                return next;
            });

            // Physics loop for this specific petal
            let currentPetal = petal;
            const startTime = Date.now();
            const duration = Math.random() * 1500 + 1500;

            const update = () => {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;

                if (progress >= 1) {
                    setActivePetals(prev => prev.filter(p => p.id !== id));
                    return;
                }

                currentPetal = {
                    ...currentPetal,
                    x: currentPetal.x + currentPetal.vx + Math.sin(elapsed / 500) * 0.5, // wind
                    y: currentPetal.y + currentPetal.vy + 0.5, // gravity
                    rotation: currentPetal.rotation + currentPetal.rotationSpeed,
                    life: 1 - progress
                };

                setActivePetals(prev => prev.map(p => p.id === id ? currentPetal : p));
                requestAnimationFrame(update);
            };

            requestAnimationFrame(update);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleGlobalClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleGlobalClick);
        };
    }, []); // Always active petal engine

    const [n1Display, setN1Display] = useState([]);
    const [n2Display, setN2Display] = useState([]);

    const calculateFlames = useCallback(async () => {
        if (!bName.trim() || !gName.trim()) return;

        // Setup initial display
        setN1Display(bName.toUpperCase().split('').map((char, i) => ({ char, id: `n1-${i}`, status: 'active' })));
        setN2Display(gName.toUpperCase().split('').map((char, i) => ({ char, id: `n2-${i}`, status: 'active' })));

        setFlameStatus('calculating');
        setLoadingText('Consulting the stars...');

        let n1Arr = bName.toLowerCase().replace(/[^a-z]/g, '').split('');
        let n2Arr = gName.toLowerCase().replace(/[^a-z]/g, '').split('');

        // Dramatic delay before cancellation starts
        await new Promise(r => setTimeout(r, 1500));
        setLoadingText('Merging souls...');

        // Cancellation Animation Logic
        let currentN1 = bName.toUpperCase().split('').map((char, i) => ({ char, id: `n1-${i}`, status: 'active' }));
        let currentN2 = gName.toUpperCase().split('').map((char, i) => ({ char, id: `n2-${i}`, status: 'active' }));

        for (let i = 0; i < n1Arr.length; i++) {
            for (let j = 0; j < n2Arr.length; j++) {
                if (n1Arr[i] === n2Arr[j]) {
                    // Find actual index in display arrays (skipping symbols/spaces)
                    const char1 = n1Arr[i];
                    const char2 = n2Arr[j];
                    const idx1 = currentN1.findIndex((item) => item.char.toLowerCase() === char1 && item.status === 'active');
                    const idx2 = currentN2.findIndex((item) => item.char.toLowerCase() === char2 && item.status === 'active');

                    if (idx1 !== -1 && idx2 !== -1) {
                        currentN1[idx1].status = 'cancelled';
                        currentN2[idx2].status = 'cancelled';

                        setN1Display([...currentN1]);
                        setN2Display([...currentN2]);

                        n1Arr.splice(i, 1);
                        n2Arr.splice(j, 1);
                        i--;

                        await new Promise(r => setTimeout(r, 300)); // Speed of cancellation
                        break;
                    }
                }
            }
        }

        setLoadingText('Calculating ultimate bond...');
        await new Promise(r => setTimeout(r, 1000));

        const count = n1Arr.length + n2Arr.length;
        let res = 'Friends';
        if (count > 0) {
            let flames = ['Friends', 'Lovers', 'Affection', 'Marriage', 'Enemies', 'Siblings'];
            let idx = 0;
            while (flames.length > 1) {
                idx = (idx + count - 1) % flames.length;
                flames.splice(idx, 1);
            }
            res = flames[0];
        }

        setFlameResult(res);
        setLoadingText('Destiny revealed!');
        await new Promise(r => setTimeout(r, 800));
        setFlameStatus('result');

        // Poster Generation Logic
        setTimeout(() => {
            const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
            <defs>
              <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ff4d6d" />
                <stop offset="100%" stop-color="#c9184a" />
              </linearGradient>
              <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity="0.1"/>
              </filter>
            </defs>
            
            <rect width="1080" height="1350" fill="#ffffff"/>
            
            <circle cx="1080" cy="0" r="300" fill="#fcfcfe" />
            <circle cx="0" cy="1350" r="300" fill="#fcfcfe" />

            <!-- Header Branding -->
            <text x="540" y="120" font-family="serif" font-size="30" fill="#0a0000ff" text-anchor="middle" letter-spacing="12" font-weight="bold">A PERFECT RESULT BY GLIFFY.X💜</text>

            <!-- First Name (Top) -->
            <text x="540" y="350" font-family="serif" font-size="140" fill="#1a1a1a" text-anchor="middle" font-weight="bold" letter-spacing="-2">${bName}</text>
            
            <!-- PERFECT DOUBLE HEART CENTER -->
            <g transform="translate(540, 700)" filter="url(#dropShadow)">
                <!-- Symmetrical Base Heart Path -->
                <symbol id="perfectHeart">
                    <path d="M0 200 C-220 100, -320 -100, 0 -250 C320 -100, 220 100, 0 200" />
                </symbol>

                <!-- Back Heart (Right/Large) -->
                <use href="#perfectHeart" transform="translate(60, 0) scale(0.9) rotate(5)" 
                     fill="none" stroke="url(#roseGrad)" stroke-width="10" opacity="0.2" />
                
                <!-- Front Heart (Left/Styled) -->
                <use href="#perfectHeart" transform="translate(-40, 10) scale(1.05) rotate(-5)" 
                     fill="none" stroke="url(#roseGrad)" stroke-width="20" stroke-linecap="round" />
                
                <!-- Result Text perfectly centered -->
                <text y="0" font-family="serif" font-size="130" fill="#ff4d6d" text-anchor="middle" font-weight="900" text-transform="uppercase" letter-spacing="5">${res}</text>
                <text y="90" font-family="serif" font-size="70" fill="#1a1a1a" text-anchor="middle" opacity="0.8">${FLAMES_EMOJIS[res] || '🌹'}</text>
            </g>

            <!-- Second Name (Bottom) -->
            <text x="540" y="1150" font-family="serif" font-size="140" fill="#1a1a1a" text-anchor="middle" font-weight="bold" letter-spacing="-2">${gName}</text>

            <!-- Bottom Branding -->
            <g transform="translate(540, 1280)">
                <text font-family="serif" font-size="30" fill="#000000ff" text-anchor="middle" letter-spacing="6" font-weight="bold">CERTIFIED SOUL BOND • GLIFFY.X 💜</text>
            </g>
          </svg>
        `;

            // Convert SVG to PNG for high-quality download
            const img = new Image();
            const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 1080;
                canvas.height = 1350;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const pngUrl = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = `${bName}_${gName}_FLAMES_Perfect.png`;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                URL.revokeObjectURL(url);
            };
            img.src = url;
        }, 1000);
    }, [bName, gName, setN1Display, setN2Display, setFlameStatus, setLoadingText, setFlameResult]);

    const toWA = useCallback((product) => {
        const msg = product
            ? `Hi Gliffy.X! 💜 I want to order a *${product.title}* (${product.price}). Please help me get started!`
            : `Hi Gliffy.X! 💜 I'm interested in creating a Couple Page. Can you help?`;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }, []);

    const addToCart = useCallback((product) => {
        setCart(prev => prev.find(p => p.id === product.id) ? prev : [...prev, product]);
        setPopup(product);
        setCartBounce(true);
        setPetals(true);
        setTimeout(() => setCartBounce(false), 800);
        setTimeout(() => setPetals(false), 1600);
        setTimeout(() => setPopup(null), 5000);
    }, []);




    return (
        <div className="cp-page">

            {/* Floating hearts */}
            <div className="cp-hearts-bg" aria-hidden="true">
                {FLOAT_HEARTS.map((h, i) => (
                    <span key={i} className="cp-fheart" style={{
                        left: h.left, fontSize: h.size, opacity: h.opacity,
                        animationDuration: `${h.dur}s`, animationDelay: `${h.delay}s`,
                    }}>♥</span>
                ))}
            </div>

            {/* Rose petals burst */}
            <AnimatePresence>
                {petals && (
                    <div className="cp-petals" aria-hidden="true">
                        {[...Array(14)].map((_, i) => (
                            <span key={i} className="cp-petal" style={{
                                left: `${8 + i * 6.5}%`,
                                animationDelay: `${i * 0.07}s`,
                            }}>🌸</span>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* ── HERO ── */}
            <section className="cp-hero">
                <div className="cp-hero-glow" aria-hidden="true" />
                
                {/* Thirumanam Style Hanging Lamps */}
                <div className="cp-hanging-lamps" aria-hidden="true">
                    {[
                        { length: '120px', delay: '0s', left: '15%' },
                        { length: '200px', delay: '-1s', left: '30%' },
                        { length: '160px', delay: '-2s', left: '70%' },
                        { length: '240px', delay: '-0.5s', left: '85%' },
                    ].map((lamp, i) => (
                        <div key={i} className="cp-lamp-container" style={{ left: lamp.left, animationDelay: lamp.delay }}>
                            <div className="cp-lamp-wire" style={{ height: lamp.length }} />
                            <div className="cp-lamp-bulb" />
                            <div className="cp-lamp-glow" />
                        </div>
                    ))}
                </div>
                <motion.div className="cp-hero-body"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}>

                    <motion.span className="cp-badge"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}>
                        <Sparkles size={12} /> By Gliffy.X
                    </motion.span>

                    <motion.h1
                        className="cp-hero-h1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        Crafting Digital <em>Love Stories</em>
                    </motion.h1>
                    <motion.button className="cp-btn-primary cp-btn-hero"
                        onClick={() => {
                            const el = document.getElementById('cards');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        onMouseEnter={handleBtnEnter}
                        onMouseLeave={handleBtnLeave}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(127, 0, 255, 0.4)' }} whileTap={{ scale: 0.95 }}>
                        Start Your Project <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </section>



            {/* ── CARDS ── */}
            <section className="cp-cards-section" id="cards">
                <motion.div className="cp-sec-hdr"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <span className="cp-sec-tag">Choose Your Story</span>
                    <h2 className="cp-sec-title">Three pages. Infinite feelings.</h2>
                </motion.div>
                <div className="cp-grid">
                    {PRODUCTS.map((p, i) => (
                        <motion.article key={p.id} className="cp-card"
                            style={{ '--cc': p.color, '--cg': p.glow }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.7, delay: i * 0.14 }}
                            whileHover={{ y: -12 }}>
                            <div className="cp-card-mesh" />
                            <div className="cp-card-emoji">{p.emoji}</div>
                            <div className="cp-card-hb" aria-hidden="true">♥</div>
                            <h3 className="cp-card-title">{p.title}</h3>
                            <p className="cp-card-tagline">{p.tagline}</p>
                            <ul className="cp-card-feats">
                                {p.features.map(f => (
                                    <li key={f}><Heart size={10} fill="currentColor" />{f}</li>
                                ))}
                            </ul>
                            <div className="cp-card-foot">
                                <span className="cp-price">{p.price}</span>
                                <div className="cp-card-btns">
                                    <button className="cp-btn-prev" onClick={() => setModal(p)} onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave}>Preview</button>
                                    <motion.button className="cp-btn-add"
                                        onClick={() => addToCart(p)} onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave} whileTap={{ scale: 0.9 }}>
                                        <Heart size={13} fill="currentColor" /> Add
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ── FLAMES GAME ── */}
            <section className="cp-flames-sec" id="flames">
                <motion.div className="cp-flames-wrap"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}>

                    <div className="cp-flames-header">
                        <span className="cp-sec-tag">Interactive</span>
                        <h2 className="cp-preview-h2">FLAMES Magic</h2>
                        <p className="cp-preview-p">Test your bond. Enter your names and let destiny decide.</p>
                    </div>

                    <div className="cp-flames-box">
                        {flameStatus === 'idle' && (
                            <motion.div className="cp-flames-inputs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="cp-input-group">
                                    <input type="text" placeholder="Alagan" value={bName} onChange={e => setBName(e.target.value)} maxLength={20} />
                                    <Heart size={20} fill="#FF4D6D" color="#FF4D6D" className="cp-flame-icon" />
                                    <input type="text" placeholder="Alagii😘" value={gName} onChange={e => setGName(e.target.value)} maxLength={20} />
                                </div>
                                <motion.button className="cp-btn-primary cp-btn-flames" onClick={calculateFlames}
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    disabled={!bName.trim() || !gName.trim()}>
                                    Play FLAMES ✨
                                </motion.button>
                            </motion.div>
                        )}

                        {flameStatus === 'calculating' && (
                            <motion.div className="cp-flames-calc cp-flames-calc--new" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <div className="cp-destiny-display">
                                    <div className="cp-name-line">
                                        {n1Display.map(item => (
                                            <motion.span key={item.id}
                                                className={`cp-char ${item.status}`}
                                                animate={item.status === 'cancelled' ? { scale: 0.8, opacity: 0.2, y: 10 } : {}}
                                            >
                                                {item.char}
                                                {item.status === 'cancelled' && <motion.div className="cp-strike" initial={{ width: 0 }} animate={{ width: '100%' }} />}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <motion.div className="cp-destiny-heart" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                                        <Heart fill="#FF4D6D" size={32} />
                                    </motion.div>
                                    <div className="cp-name-line">
                                        {n2Display.map(item => (
                                            <motion.span key={item.id}
                                                className={`cp-char ${item.status}`}
                                                animate={item.status === 'cancelled' ? { scale: 0.8, opacity: 0.2, y: -10 } : {}}
                                            >
                                                {item.char}
                                                {item.status === 'cancelled' && <motion.div className="cp-strike" initial={{ width: 0 }} animate={{ width: '100%' }} />}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="cp-flames-letters-v2">
                                    {['F', 'L', 'A', 'M', 'E', 'S'].map((l, i) => (
                                        <motion.span key={i}
                                            className="cp-flame-l"
                                            animate={{
                                                opacity: [0.4, 1, 0.4],
                                                scale: [1, 1.2, 1],
                                                textShadow: ['0 0 0px #fff', '0 0 20px #FF4D6D', '0 0 0px #fff']
                                            }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                                        >
                                            {l}
                                        </motion.span>
                                    ))}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={loadingText}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="cp-calc-status"
                                    >
                                        {loadingText}
                                    </motion.p>
                                </AnimatePresence>
                            </motion.div>
                        )}

                        {flameStatus === 'result' && (
                            <motion.div className="cp-flames-result" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
                                <motion.span className="cp-flame-res-emoji"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: [1, 1.4, 1], rotate: 0 }}
                                    transition={{ type: 'spring', damping: 10, mass: 0.8, delay: 0.2 }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {FLAMES_EMOJIS[flameResult] || '🌹'}
                                </motion.span>
                                <h3 className="cp-flame-res-text">{flameResult}</h3>
                                <p>Your beautiful result poster has been auto-downloaded!</p>
                                <button className="cp-btn-ghost" onClick={() => { setFlameStatus('idle'); setBName(''); setGName(''); }}>Play Again</button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </section>

            {/* ── LOVE LANGUAGE QUIZ ── */}
            <section className="cp-quiz-sec">
                <motion.div className="cp-quiz-wrap"
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    
                    <div className="cp-sec-hdr" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span className="cp-sec-tag">Discover</span>
                        <h2 className="cp-sec-title">What's Your Love Language?</h2>
                        <p className="cp-preview-p" style={{ maxWidth: '600px', margin: '0 auto' }}>Not sure what to get? Take this quick quiz to find the perfect page for your special someone.</p>
                    </div>

                    <div className="cp-quiz-box">
                        <AnimatePresence mode="wait">
                            {quizStep === 0 && (
                                <motion.div key="intro" className="cp-quiz-intro" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: -20 }}>
                                    <Sparkles size={40} className="cp-quiz-icon" style={{ margin: '0 auto 1rem', display: 'block', color: '#c77dff' }} />
                                    <h3>Find Your Perfect Match</h3>
                                    <p>3 simple questions to discover the ideal digital gift.</p>
                                    <motion.button className="cp-btn-primary cp-btn-quiz" onClick={() => setQuizStep(1)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        Start Quiz ✨
                                    </motion.button>
                                </motion.div>
                            )}

                            {quizStep > 0 && quizStep <= QUIZ_QUESTIONS.length && (
                                <motion.div key={`q${quizStep}`} className="cp-quiz-q" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                                    <span className="cp-quiz-progress">Question {quizStep} of {QUIZ_QUESTIONS.length}</span>
                                    <h3 className="cp-quiz-question-text">{QUIZ_QUESTIONS[quizStep - 1].q}</h3>
                                    <div className="cp-quiz-opts">
                                        {QUIZ_QUESTIONS[quizStep - 1].opts.map((opt, i) => (
                                            <motion.button key={i} className="cp-quiz-opt-btn" onClick={() => handleQuizAnswer(opt.type)}
                                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }} whileTap={{ scale: 0.98 }}>
                                                {opt.text}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {quizStep > QUIZ_QUESTIONS.length && quizResult && (
                                <motion.div key="result" className="cp-quiz-result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    <div className="cp-quiz-res-emoji">{quizResult.emoji}</div>
                                    <h3>We recommend: {quizResult.title}</h3>
                                    <p>{quizResult.tagline}</p>
                                    <div className="cp-quiz-res-btns">
                                        <button className="cp-btn-ghost" onClick={() => { setQuizStep(0); setQuizScores({ proposal: 0, birthday: 0, sorry: 0 }); setQuizResult(null); }}>Retake Quiz</button>
                                        <motion.button className="cp-btn-primary" onClick={() => addToCart(quizResult)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Heart size={14} fill="currentColor" style={{ marginRight: '6px' }} /> Add to Bundle
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>

            {/* ── CART BAR ── */}
            {cart.length > 0 && (
                <motion.div className="cp-cart-bar"
                    initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
                    <motion.div animate={cartBounce ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.4 }}>
                        <ShoppingCart size={18} />
                    </motion.div>
                    <span>{cart.length} item{cart.length > 1 ? 's' : ''} in love bundle</span>
                    <button className="cp-cart-order" onClick={() => {
                        const msg = `Hi! I want to order:\n${cart.map(c => `• ${c.title} (${c.price})`).join('\n')}\nTotal: ₹${cart.reduce((a, c) => a + parseInt(c.price.replace('₹', '')), 0)}`;
                        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                    }}>Order Now</button>
                </motion.div>
            )}

            {/* ── ADD-TO-CART POPUP ── */}
            <AnimatePresence>
                {popup && (
                    <motion.div className="cp-popup"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                        <button className="cp-popup-close" onClick={() => setPopup(null)}><X size={16} /></button>
                        <div className="cp-popup-heart" aria-hidden="true">💖</div>
                        <h4>Added to your love bundle!</h4>
                        <p>You're creating something beautiful.</p>
                        <div className="cp-popup-btns">
                            <button onClick={() => setPopup(null)}>Continue Exploring</button>
                            <button className="cp-popup-order" onClick={() => {
                                setPopup(null);
                                toWA(popup);
                            }}>Order Now →</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── MODAL ── */}
            <AnimatePresence>
                {modal && (
                    <motion.div className="cp-modal-overlay"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setModal(null)}>
                        <motion.div className="cp-modal"
                            style={{ '--cc': modal.color, '--cg': modal.glow }}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={e => e.stopPropagation()}>
                            <button className="cp-modal-close" onClick={() => setModal(null)}><X size={20} /></button>
                            <div className="cp-modal-emoji">{modal.emoji}</div>
                            <h3 className="cp-modal-title">{modal.title}</h3>
                            <p className="cp-modal-tagline">{modal.tagline}</p>
                            <p className="cp-modal-desc">{modal.desc}</p>
                            <ul className="cp-modal-feats">
                                {modal.features.map(f => <li key={f}><Heart size={12} fill="currentColor" />{f}</li>)}
                            </ul>
                            <div className="cp-modal-foot">
                                <span className="cp-price cp-price--lg">{modal.price}</span>
                                <motion.button className="cp-btn-primary"
                                    onClick={() => { addToCart(modal); setModal(null); }}
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Heart size={15} fill="currentColor" /> Add to Bundle
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Rose Petal Cursor Engine */}
            <div className="cp-cursor-layer" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                        <radialGradient id="petal-grad-1" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#ffb3c1" />
                            <stop offset="60%" stopColor="#FF4D6D" />
                            <stop offset="100%" stopColor="#c9184a" />
                        </radialGradient>
                        <radialGradient id="petal-grad-2" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#ff758f" />
                            <stop offset="50%" stopColor="#ff4d6d" />
                            <stop offset="100%" stopColor="#a4133c" />
                        </radialGradient>
                        <radialGradient id="petal-grad-3" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ff99ac" />
                            <stop offset="100%" stopColor="#ff4d6d" />
                        </radialGradient>
                    </defs>
                </svg>
                {activePetals.map((p, idx) => {
                    const grads = ["url(#petal-grad-1)", "url(#petal-grad-2)", "url(#petal-grad-3)"];
                    const grad = grads[idx % 3];
                    return (
                        <div key={p.id} style={{
                            position: 'absolute',
                            left: p.x,
                            top: p.y,
                            width: p.size,
                            height: p.size * 1.2,
                            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.life})`,
                            opacity: p.opacity * p.life,
                            filter: `blur(${p.blur})`,
                            transition: 'none'
                        }}>
                            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))' }}>
                                <path d="M50 0C25 0 0 35 0 70C0 100 25 120 50 120C75 120 100 100 100 70C100 35 75 0 50 0Z"
                                    fill={grad} />
                                <path d="M50 5C30 10 15 40 15 70" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
