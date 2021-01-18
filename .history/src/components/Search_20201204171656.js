import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I run with every render');

  // useEffect(() => {
  //   console.log('I only run once');
  // }, [term]);

  useEffect(() => {
    console.log('I run once');
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="input">Enter Search Term</label>
          <input
            value={term}
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
