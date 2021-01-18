import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikans',
    value: 'af'
  },
]

const Translate = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default Translate;
