import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.title}>
        <div className="title active">
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return { renderedItems };
};

export default Accordion;
