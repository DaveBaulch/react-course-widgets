import React, { useState } from 'react';

const Dropdown = ({options }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderedOptions = options.map((options) => {
    return (
      <div key={option.va;ue}></div>
    );
  });

  return (
    <div className="ui">
      <h1>Dropdown</h1>
    </div>
  );
};

export default Dropdown;
