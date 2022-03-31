import React, { useState } from 'react';
import ClipboardIcon from '../assets/icons/clipboard.svg';

export default function ContactPopup(props) {

  return (
    <div className='contact-popup'>

      <div className='backdrop' onClick={props.cross}></div>

      <div>
        <p className='body-txt'>If your email client does not open then send manually at <span>utsavfrutu@gmail.com</span></p>


        {/* FIXME: Clipboard not working in mobile device */}
        <img src={ClipboardIcon} className='outline-btn' alt='copy to clipboard' onClick={() => { navigator.clipboard.writeText('utsavfrutu@gmail.com') }} />

      </div>
      <button onClick={props.cross}>
        X
      </button>
    </div>
  )
}
