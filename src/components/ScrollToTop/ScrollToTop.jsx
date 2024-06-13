import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const headerHeight = document.getElementById('header')?.offsetHeight || 0; // Récupère la hauteur du header

    // Si la route est '/' ou '*', on scrolle jusqu'en haut de la page
    // Sinon, on scrolle jusqu'à la hauteur du header
    const yOffset = ['/', '*'].includes(pathname) ? 0 : headerHeight;

    window.scrollTo({
      top: yOffset,
      behavior: 'smooth' // Défilement fluide
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
