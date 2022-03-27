import { gsap, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react';

export default function NavBarExpanded(props) {


  return (
    <nav className='navbar-exp'>
      <ul>
        <li className='animate-forward' onClick={props.onclick}><a href="#what-section" >About</a></li>
        <li className='animate-forward' onClick={props.onclick}><a href="#work-section" >Project</a></li>
        <li className='animate-forward' onClick={props.onclick}><a href="#how-section" >Workflow</a></li>
        <li className='animate-forward' onClick={props.onclick}><a href="#contact-section" >Contact</a></li>
      </ul>

      <button className='icon-btn' onClick={props.onclick}></button>

      <ul>
        <li className='animate-forward'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur ipsam facilis quas vel rerum, ducimus harum hic aliquam mollitia sequi aperiam eius fuga? Unde, maiores. Aperiam eaque illum eos.</p>
        </li>
        <li className='animate-forward'>
          <p>Copywrite 2022 ©Utsav-Anand</p>
        </li>
      </ul>
    </nav>
  );
}