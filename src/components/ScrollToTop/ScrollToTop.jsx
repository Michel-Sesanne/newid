import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Récupérer la hauteur du header
    const headerHeight = document.getElementById('header').offsetHeight;

    // Calculer le décalage en fonction de la route actuelle
    let yOffset = 0;
    if (pathname !== '/') {
      yOffset = headerHeight > 0 ? headerHeight : 0;
    }

    // Faire défiler la page jusqu'au bas du header
    window.scrollTo({
      top: yOffset,
      behavior: 'smooth' // Défilement fluide
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
