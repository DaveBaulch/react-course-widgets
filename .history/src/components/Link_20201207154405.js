import React from 'react';

const Link = ({ href, className, children }) => {
  return (
    <a onClickhref={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
