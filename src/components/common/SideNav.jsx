import React from 'react'

export default function SideNav(props) {
  return (
    <nav className='nav-containerr'>
      <ul className='side-nav body-txt'>

        <li><a href="#about-project" className='nav-links'>Project details</a></li>

        <li><a href="#problem-statement" className='nav-links'>Problem statement</a></li>

        <li><a href="#ideation" className='nav-links'>Ideation session</a></li>

        <li><a href="#competitor" className='nav-links'>Competitor research</a></li>

        <li><a href="#content-map" className='nav-links'>Content map</a></li>

        <li><a href="#wireframe" className='nav-links'>Wireframing</a></li>

        <li><a href="#ui-design" className='nav-links'>UI design</a></li>

        <li><a href="#developed-app" className='nav-links'>Developed application</a></li>

        <li><a href="#user-testing" className='nav-links'>User testing</a></li>

        <li><a href="#deployment" className='nav-links'>Deployment</a></li>

      </ul>
    </nav>
  )
}
