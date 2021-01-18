import React from 'react';

const Link = ({ href, className, children }) => {
  
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
