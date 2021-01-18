import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);




  return (
    <div className="ui">
      {renderedItems}
      {activeIndex}
    </div>
  );
};

export default Select;
