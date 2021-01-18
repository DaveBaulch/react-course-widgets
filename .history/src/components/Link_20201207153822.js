import React from 'react';

const Link = ({ path, className }) => {
  return (
    <a href={path} className={className}>
      children
    </a>
  );
};

export default Link;
