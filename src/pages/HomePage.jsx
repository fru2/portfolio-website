import NavBar from '../components/NavBar';
import ButtonToggle from '../components/ButtonToggle';
import ProjectElements from "../components/ProjectsElement";
import WorkFlow from "../components/WorkFlow";
import ButtonOutline from '../components/ButtonOutline';
import NavExtended from "../components/NavBarExpanded";

import placeholder from "../assets/images/placeholder.png";

import BehanceLogo from '../assets/icons/behance.svg';
import CodepenLogo from '../assets/icons/codepen.svg';

import { Link, Outlet } from 'react-router-dom';

import { getProjectData } from '../data/data';

export default function HomePage() {

  const expandNavbar = () => {
    document.querySelector('.navbar-exp').style.display = 'flex';
  }

  const closeNavbar = () => {
    document.querySelector('.navbar-exp').style.display = 'none';
  }

  // FIXME: Make the image responsive and add media query for tablet sized devices.


  let data = getProjectData();

  return (
    <main>
      <NavExtended onclick={closeNavbar} />
      <NavBar onclick={expandNavbar} />


      <header>
        <div className="hero-image"></div>

        <div className="hero-txt">
          <h3>Hi</h3>
          <h1>I'm Utsav</h1>
        </div>

        <div className="social-links">
          <a href="https://codepen.com/" target="_blank" rel="noopener noreferrer"><img src={CodepenLogo} alt="Codepen nav link" /></a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer"><img src={BehanceLogo} alt="Behance nav link" /></a>
        </div>

      </header>

      <section className='what-section container' id="what-section">
        <h1 className='heading-txt'>I Design and Create Websites</h1>
        {/* <h1 className='heading-txt'></h1> */} {/* DO NOT UNCOMMENT */}
        <p className='body-txt'>I love creating, whether it's writing code for a website or making an art piece. Click a category below to view projects related to that.</p>
        <div>
          <ButtonToggle text="Front-end" />
          <ButtonToggle text="UX-UI" />
          <ButtonToggle text="Fine arts" />
        </div>
        {/* <ParallaxGallery img1={} img2={} img3={}/> */}{/* DO NOT UNCOMMENT */}
      </section>


      {/* TODO: Contents beyond this point will change as per the selected toggle button */}

      <section className='work-section container' id="work-section">
        <h1 className='heading-txt'>Projects</h1>
        {data.map((project) => (
          <Link to={`/projects/${project.pth}`} key={project.id}>
            <ProjectElements key={project.id} id={project.id} imgSrc={placeholder} title={project.title} desc={project.desc}></ProjectElements>
          </Link>
        ))}

      </section>
      <Outlet />


      <section className='how-section container' id="how-section">
        <h1 className='heading-txt'>From paper to product</h1>
        <p className='body-txt'>it takes a lot</p>
        <WorkFlow />
      </section>

      <section className='contact-section container' id="contact-section">
        <h1 className='heading-txt'>Let's connect</h1>
        <p className='body-txt'>If you have reached this far, then wouldn't it be great if we can have a chat. Or maybe we can work together to build something ;)</p>
        <ButtonOutline text="Email" />
      </section>

    </main>
  );
}
