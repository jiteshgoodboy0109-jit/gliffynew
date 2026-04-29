import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,           // Snappy — no perceived lag
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out — fast start, gentle end
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,    // Slightly faster than native = no sluggishness
      smoothTouch: false,      // OFF — native touch scroll is always faster on mobile
      touchMultiplier: 1,
      infinite: false,
    });

    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
