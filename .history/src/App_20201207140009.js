import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  // return (
  //   <div>
  //     <button onClick={() => setShowDropdown(!showDropdown)}>
  //       Togge dropdown
  //     </button>
  //     {/*{<Accordion items={items} />
  //     <Search />*/}

  //     {showDropdown ? (
  //       <Dropdown
  //         selected={selected}
  //         onSelectedChange={setSelected}
  //         options={options}
  //       />
  //     ) : null}
  //   </div>
  // );

  return (
    <div>
      <input type="text" />
      <Translate />
    </div>
  );
};
