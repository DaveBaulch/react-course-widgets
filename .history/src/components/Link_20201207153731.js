import React from 'react';

const Link = ({ title, path }) => {
  return (
    <a href={path} className={ clas}}>
      {title}
    </a>
  );
};

export default Link;
