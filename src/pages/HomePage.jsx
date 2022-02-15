import NavBar from '../components/common/NavBar';
import ButtonToggle from '../components/common/ButtonToggle';
import ProjectElements from "../components/homePage/ProjectsElement";
import WorkFlow from "../components/homePage/WorkFlow";
import ButtonOutline from '../components/common/ButtonOutline';
import NavExtended from "../components/common/NavBarExpanded";

import placeholder from "../assets/images/placeholder.png";

import BehanceLogo from '../assets/icons/behance.svg';
import CodepenLogo from '../assets/icons/codepen.svg';

export default function HomePage() {

  const expandNavbar = () => {
    document.querySelector('.navbar-exp').style.display = 'flex';
  }

  const closeNavbar = () => {
    document.querySelector('.navbar-exp').style.display = 'none';
  }

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

      <section className='what-section container'>
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

      {/* TODO: remove this section statically typed content.*/}
      <section className='work-section container'>
        <h1 className='heading-txt'>Projects</h1>
        <ProjectElements id="1" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
        <ProjectElements id="2" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
        <ProjectElements id="3" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
      </section>


      <section className='how-section container'>
        <h1 className='heading-txt'>From paper to product</h1>
        <p className='body-txt'>it takes a lot</p>
        <WorkFlow />
      </section>

      <section className='contact-section container'>
        <h1 className='heading-txt'>Let's conntect</h1>
        <p className='body-txt'>If you have reached this far, then wouldn't it be great if we can have a chat. Or maybe we can work together to build something ;)</p>
        <ButtonOutline text="Email" />
      </section>

    </main>
  );
}
