import React, { useState } from 'react';

const Dropdown = ({ options }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return <div className="ui form">
    <div className="field">
      <label className="label">Select a Color</label>
      <select
    </div>
  </div>
};

export default Dropdown;
