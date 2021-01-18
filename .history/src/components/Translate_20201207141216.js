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

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
          }
        }
      );
    };
  }, []);

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
