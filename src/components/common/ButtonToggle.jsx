import React from 'react';

export default function ButtonToggle(props) {
  return (
    <button className='outline-btn'>
      {props.text}
    </button>
  );
}
