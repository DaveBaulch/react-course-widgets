import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    event
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
