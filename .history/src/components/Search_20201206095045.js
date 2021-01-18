import React, { useState, useEffect } from 'react';
import axios for 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('I run with every render');

  // second argument defines when the function runs

  // useEffect(() => {
  //   console.log('I only run once');
  // }, []);

  // useEffect(() => {
  //   console.log('I run after every render and at initial render');
  // });

  // useEffect(() => {
  //   console.log('I only run once');
  // }, [term]);

  useEffect(() => {
    const search = async () => {
    

    };
    
  }, [term]);

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
