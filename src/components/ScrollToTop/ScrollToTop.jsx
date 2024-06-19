import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const headerHeight = document.getElementById('header')?.offsetHeight || 0;
    const navHeight = document.getElementById('nav')?.offsetHeight || 0;
    const headerNavHeight = headerHeight + navHeight;
    const yOffset = (pathname === '/' || pathname === '*') ? 0 : headerNavHeight;
    
    window.scrollTo({
      top: yOffset,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
