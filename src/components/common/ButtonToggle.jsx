import React from 'react';

export default function ButtonToggle(props) {
  return (
    <button className='toggle-btn'>
      {props.text}
    </button>
  );
}
