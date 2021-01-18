import React from 'react';

const Link = ({ title, path, className }) => {
  return (
    <a href={path} className={className}>
      {children}
    </a>
  );
};

export default Link;
