import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  // const setTerm = () => {
  //   setTerm(term);
  // };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            value="term"
            onChange={(e) => setTerm(e.target.value)}
            id="input"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
