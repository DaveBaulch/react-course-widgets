import { useState } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => 
    window.addEventListener('popstate', onL)
  )


  return window.location.pathname === path ? children : null;
};


export default Route;
