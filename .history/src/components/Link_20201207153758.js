import React from 'react';

const Link = ({ title, path, className }) => {
  return (
    <a href={path} className={className}>
      {title}
    </a>
  );
};

export default Link;
