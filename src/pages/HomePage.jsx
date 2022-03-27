import NavBar from '../components/NavBar';
import ButtonToggle from '../components/ButtonToggle';
import ProjectElements from "../components/ProjectsElement";
import WorkFlow from "../components/WorkFlow";
import ButtonOutline from '../components/ButtonOutline';
import NavExtended from "../components/NavBarExpanded";
import ParallaxGallery from '../components/ParallaxGallery';


// media files
import placeholder from "../assets/images/placeholder.png";
import BehanceLogo from '../assets/icons/behance.svg';
import CodepenLogo from '../assets/icons/codepen.svg';

//plugins
import { Link, Outlet } from 'react-router-dom';
import { gsap, ScrollTrigger } from 'gsap/all';
// import ScrollTrigger from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

//data
import { getProjectData } from '../data/data';




export default function HomePage() {

  gsap.registerPlugin(ScrollTrigger);


  let timeline = gsap.timeline({ default: { duration: 0.5 } });


  const expandNavbar = () => {
    // document.querySelector('.navbar-exp').style.display = 'flex';

    timeline
      .to('.navbar-exp', { x: 0 })
      .to('.animate-forward', { opacity: 1, y: 0, stagger: 0.100 });

    // for replay of animation
    timeline.timeScale(1);
    timeline.play();

    console.log('expand');
  }

  const closeNavbar = () => {
    // document.querySelector('.navbar-exp').style.display = 'none';
    timeline.timeScale(2);
    timeline.reverse();
  }

  // FIXME: Make the image responsive and add media query for tablet sized devices.

  let data = getProjectData();


  useEffect(() => {
    gsapAnimation();
  }, []); // empty array means 'run once'

  return (
    <main>
      <NavExtended onclick={closeNavbar} />
      <NavBar isMain={true} onclick={expandNavbar} />


      <header>
        {/* <div className="hero-image">
          <img src={placeholder} alt="placeholder" />
        </div> */}

        <div className="hero-txt">
          <h3>Hi</h3>
          <h1>I'm Utsav</h1>
        </div>
        <div className="outline-btn resume-btn">
          Contact
        </div>
        <div className="social-links">
          <a href="https://codepen.io/fru2" target="_blank" rel="noopener noreferrer"><img src={CodepenLogo} alt="Codepen nav link" /></a>
          <a href="https://www.behance.net/fru2" target="_blank" rel="noopener noreferrer"><img src={BehanceLogo} alt="Behance nav link" /></a>
        </div>

      </header>

      <section className='what-section container' id="what-section">
        <h1 className='heading-txt'>I Design <br></br>and Create Websites</h1>
        {/* <h1 className='heading-txt'></h1> */} {/* DO NOT UNCOMMENT */}
        <p className='body-txt'>I love creating, whether it's writing code for a website or making an art piece. Click a category below to view projects related to that.</p>
        <div>
          <ButtonToggle text="Front-end" />
          <ButtonToggle text="UX-UI" />
        </div>

        <ParallaxGallery img0={placeholder} img1={placeholder} img2={placeholder} />
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
        <ButtonOutline text="Contact" />
      </section>

    </main>
  );
}


function gsapAnimation() {

  // ScrollTrigger.config({
  //   // Disables the resfresh even in viewport resize
  //   autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
  // })

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    ScrollTrigger.config({
      // Disables the resfresh even in viewport resize
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
    })

  }


  let pageLoad = gsap.timeline({
    defaults: { duration: 0.5, }
  });

  pageLoad
    .to('.hero-txt h3', { opacity: 1 })
    .to('.hero-txt h1', { opacity: 1 })
    .to('.resume-btn', { opacity: 1 });


  let scrollAnim = gsap.timeline({
    scrollTrigger: {
      trigger: 'header',
      scrub: true,
      start: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? '91% bottom' : 'bottom bottom',
      // start: '91% bottom',
      end: '+=250',
      pin: true,
      pinSpacing: false,
    }
  })

  scrollAnim
    .fromTo('header', { opacity: 1 }, { opacity: 0 })

}

function openNavbarAnim() {

}