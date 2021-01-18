import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div key={}>
        <div className="title active">
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <h1>{items.length}</h1>;
};

export default Accordion;
