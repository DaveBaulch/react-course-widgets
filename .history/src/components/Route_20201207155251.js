import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {



  useEffect(() => {

    const onLocationChange = () => {
      comsole.log()
    }
    window.addEventListener('popstate', onLocationChange);
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;