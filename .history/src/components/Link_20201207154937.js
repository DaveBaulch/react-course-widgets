import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', href);
    
    const navEvent = new PopStateEvent('')
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
