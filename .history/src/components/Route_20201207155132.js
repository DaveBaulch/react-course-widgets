import { useState } from 'react';

const Route = ({ path, children }) => {
  useEffect(() => 
    window.addEventListener('popstate')
  )


  return window.location.pathname === path ? children : null;
};


export default Route;
