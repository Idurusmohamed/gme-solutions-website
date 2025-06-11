import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will scroll the window to the top on every route change.
const ScrollToTop = () => {
  // Extracts the pathname from the current location object
  const { pathname } = useLocation();

  // useEffect hook will run every time the pathname changes
  useEffect(() => {
    // "document.documentElement.scrollTo" is the same as "window.scrollTo", but better for browser compatibility.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional: 'smooth' for a smooth scroll, but 'instant' is better for page loads
    });
  }, [pathname]); // The effect runs every time the pathname changes

  // This component does not render any visible UI
  return null;
};

export default ScrollToTop;