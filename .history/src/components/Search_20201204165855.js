import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

    const onTitleClick = (index) => {
      setActiveIndex(index);
    };


  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input value="term" id="input" className="input" />
        </div>
      </div>
    </div>
  );
};

export default Search;
