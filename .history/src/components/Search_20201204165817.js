import React, { useState } from 'react';

const Search = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input id="input" className="input" />
        </div>
      </div>
    </div>
  );
};

export default Search;
