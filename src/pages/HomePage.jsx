import NavBar from '../components/common/NavBar';
import ButtonToggle from '../components/common/ButtonToggle';
import ProjectElements from "../components/homePage/ProjectsElement";
import WorkFlow from "../components/homePage/WorkFlow";
import ButtonOutline from '../components/common/ButtonOutline';

import placeholder from "../assets/images/placeholder.png";

// TODO: Add navbar in this file only

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <header>
        <h1>Template</h1>

        <div className="hero-image"></div>

        <div className="backdrop-text">
          <h1>設計</h1>
          <h1>Design</h1>
        </div>

      </header>

      <section>
        <h1>I Design and Create Websites</h1>
        <p>I love creating, whether it's writing code for a website or making an art piece. Lorem ipsum dummy text is here (change it.)</p>
        <div>
          <ButtonToggle text="Front-end" />
          <ButtonToggle text="UX-UI" />
          <ButtonToggle text="Fine arts" />
        </div>
        {/* <ParallaxGallery img1={} img2={} img3={}/> */}
      </section>


      {/* TODO: Contents beyond this point will change as per the selected toggle button */}

      {/* TODO: remove this section statically typed content.*/}
      <section>
        <h1>Projects</h1>
        <ProjectElements id="1" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
        <ProjectElements id="2" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
        <ProjectElements id="3" imgSrc={placeholder} title="Project title" desc="Short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed " />
      </section>


      <section>
        <h1>From paper to product</h1>
        <p>it takes a lot</p>
        <WorkFlow />
      </section>

      <section>
        <h1>Let's conntect</h1>
        <p>If you have reached this far, then wouldn't it be great if we can have a chat. Or maybe we can work together to build something ;)</p>
        <ButtonOutline text="Email" />
      </section>

    </main>
  );
}