import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
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
  }, [language, text]);

  return <div />;
};

export default Convert;
