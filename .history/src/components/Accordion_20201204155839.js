import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div>
        <div className="title active">
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className="title active">
          <i className="dropdown icon">{item.title}</i>
        </div>
      </div>
    );
  });

  return <h1>{items.length}</h1>;
};

export default Accordion;
