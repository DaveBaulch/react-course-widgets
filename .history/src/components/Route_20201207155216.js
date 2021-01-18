import { useState } from 'react';

const Route = ({ path, children }) => {
  onLocationChange;
  useEffect(() => {
    window.addEventListener('popstate', onLocationChange);
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
