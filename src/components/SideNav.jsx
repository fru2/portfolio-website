import React from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

export default function SideNav(props) {
  return (
    <nav className='nav-containerr'>
      <ul className='side-nav body-txt'>


        <li><Link to="about-project" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Project details</Link></li>


        <li><Link to="problem-statement" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Problem statement</Link></li>


        <li><Link to="ideation" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Ideation session</Link></li>


        <li><Link to="competitor" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Competitor research</Link></li>


        <li><Link to="content-map" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Content map</Link></li>


        <li><Link to="wireframe" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Wireframing</Link></li>



        <li><Link to="ui-design" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>UI design</Link></li>



        <li><Link to="developed-app" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Developed application</Link></li>



        <li><Link to="user-testing" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>User testing</Link></li>



        <li><Link to="deployment" spy={true} smooth={true} duration={500} className='nav-links' activeClass='nav-is-active'>Deployment</Link></li>





        {/* <li><a href="#about-project" className='nav-links'>Project details</a></li> */}

        {/* <li><a href="#problem-statement" className='nav-links'>Problem statement</a></li> */}

        {/* <li><a href="#ideation" className='nav-links'>Ideation session</a></li> */}

        {/* <li><a href="#competitor" className='nav-links'>Competitor research</a></li> */}

        {/* <li><a href="#content-map" className='nav-links'>Content map</a></li> */}

        {/* <li><a href="#wireframe" className='nav-links'>Wireframing</a></li> */}

        {/* <li><a href="#ui-design" className='nav-links'>UI design</a></li> */}

        {/* <li><a href="#developed-app" className='nav-links'>Developed application</a></li> */}

        {/* <li><a href="#user-testing" className='nav-links'>User testing</a></li> */}

        {/* <li><a href="#deployment" className='nav-links'>Deployment</a></li> */}
      </ul>
    </nav>
  )
}
