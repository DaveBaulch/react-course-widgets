import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming'); // default term
  const [debouncedTerm, DsetdebouncedTerm] = useState('programming'); // default term
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

    // check for first render to aviod throttled request on first load
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          // prevent emprty searches
          search();
        }
      }, 1000);

      // useEffect cleanup function runs every time useEffect runs
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};;

export default Search;
