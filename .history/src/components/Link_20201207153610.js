import React from 'react;'

const Link = ({ path }) => {
  return window.location.pathname === path ? children : null;
};

export default Link;
