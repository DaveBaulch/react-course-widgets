import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming'); // default term
  const [results, setResults] = useState([]);

  console.log(results);

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
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResults(data.query.search);
    };

    // if (term) {
    search();
    // }
  }, [term]);

  const renderer

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
