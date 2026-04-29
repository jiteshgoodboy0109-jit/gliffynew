import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useLayoutEffect fires synchronously before the browser paints —
  // this prevents the flash of the old scroll position
  useLayoutEffect(() => {
    const reset = () => {
      // 1. Kill Lenis's internal scroll position
      if (window.lenis) {
        window.lenis.stop();
        window.lenis.scrollTo(0, { immediate: true, force: true });
        window.lenis.start();
      }
      // 2. Hard-reset all scroll containers
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    reset();
    // Second pass after one frame catches any layout shift from heavy pages
    const id = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
