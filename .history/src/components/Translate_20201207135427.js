import React, { useState } from 'react';
import Dropdown from './Dropdown';
const [language, setLanguage] = useState(options[0]);

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
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setlanguage}
      />
    </div>
  );
};

export default Translate;
