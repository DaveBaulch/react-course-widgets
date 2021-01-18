import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {

    const doTranslation = async () => {
      ;
    };

  }, [language, text]);

  return <div />;
};

export default Convert;
