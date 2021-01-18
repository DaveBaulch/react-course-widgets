import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     });

  //     setResults(data.query.search);
  //   };

  //   // check for first render to aviod throttled request on first load
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         // prevent emprty searches
  //         search();
  //       }
  //     }, 1000);

  //     // useEffect cleanup function runs every time useEffect runs
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="translateInput">Enter text</label>
          <input
            id="translateInput"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
