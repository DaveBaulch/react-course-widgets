import React from 'react';

const Link = ({ title, path }) => {
  return (
    <a href={path} className="item">
      {title}
    </a>
  );
};

export default Link;
