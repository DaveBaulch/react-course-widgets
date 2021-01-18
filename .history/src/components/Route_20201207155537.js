import { useEffect } from 'react';

const Route = ({ path, children }) => {
  const
  useEffect(() => {
    const onLocationChange = () => {
      console.log('Location change');
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;