import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // array destructuring
  // null sets initial state on activeIndex
  // setActiveIndex is the finction that updates aciveIndex

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (

    );
  });

  return (
    <div className="ui">
      {renderedItems}
      {activeIndex}
    </div>
  );
};

export default Select;
