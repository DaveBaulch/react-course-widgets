import React from 'react';

const Link = ({ href, className, children }) => {
  return (
    <a href={ref} className={className}>
      {children}
    </a>
  );
};

export default Link;
