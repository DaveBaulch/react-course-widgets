import React from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is favorite JS library among engineers'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components'
//   }
// ];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'red'
  },
  {
    label: 'The color red',
    value: 'red'
  }
];

export default () => {
  return (
    <div>
      {/*{<Accordion items={items} />
      <Search />*/}
      <Dropdown options={ options} />
    </div>
  );
};