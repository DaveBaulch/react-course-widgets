import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener(
  //     'click',
  //     (event) => {
  //       // console.log(event.target);
  //       if (ref.current.contains(event.target)) {
  //         return;
  //       }
  //       setOpen(false);
  //     },
  //     { capture: true }
  //   );
  // }, []);
  // // will run once on load

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    // clean up function when removed from the DOM
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log('item click!');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log('ref: ' + ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => {
            console.log('dropdown click!');
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      <p style={`color: ${selected.value}'`}>The text is {selected.value}</p>
    </div>
  );
};

export default Dropdown;
