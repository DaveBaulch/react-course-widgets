import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

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
