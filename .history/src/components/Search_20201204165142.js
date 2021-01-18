import React from 'react';

const SEarch = ({ items }) => {
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
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      {activeIndex}
    </div>
  );
};

export default Accordion;
