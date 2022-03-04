import React from 'react'
import PlaceholderImg from '../assets/images/placeholder.png'
// import NavBar from '../components/common/NavBar'
import SideNav from '../components/common/SideNav'

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";



// TODO: Increase the width of heading-txt
// TODO: Increase the width of project-overview

export default function ProjectPage(props) {


  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>

      <SideNav></SideNav> {/*FIXME: fixed with index z-index 1*/}


      <section className='project-details'>

        {/* FIXME: fixed with z-index 2 */}


        <div className="hero-image flex-center"> {/* FIXME: fixed with z-index 3 */}
          <img src={PlaceholderImg} alt="Brand identity" />
        </div>



        <article className='about-project bg-black-gradient container' id='about-project'>
          <h1 className='heading-txt'>Project title here</h1>
          <p className='body-txt'>Project short description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>

          <div className="project-overview">
            <div className="project-overview-item">
              <p>Role</p>
              <h3>Front-end (react)</h3>
              <h3>UI Design</h3>
            </div>
            <div className="project-overview-item">
              <p>Type</p>
              <h3>Personal (case study)</h3>
            </div>
            <div className="project-overview-item">
              <p>Duration</p>
              <h3>2 Jan - 28 Jan</h3>
            </div>

          </div>

        </article>



        <article className="renders-grid container">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </article>



        <article className="problem-statement container" id="problem-statement">
          <h1 className='heading-txt'>Problem statement</h1>
          <p className='body-txt'>The brand name XYZ that works as a shopping firm has an old interface which is confusing and requires a lot of click action to perform in order to get the job done.</p>

          <div className="image image-comparison">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </article>



        <article className="ideation container" id="ideation">
          <h1 className='heading-txt'>Ideation session</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>

          <div className="image-container">
            <img src="" alt="" />
          </div>

        </article>



        <article className="competitor container" id="competitor">
          <h1 className='heading-txt'>competitor research</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>



        <article className="content-map container" id="content-map">
          <h1 className='heading-txt'>Content map</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>

          <div className="image">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>

        </article>



        <article className="wireframe container" id="wireframe">
          <h1 className='heading-txt'>Wireframing</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>



        <article className="ui-design container" id="ui-design">
          <h1 className='heading-txt'>UI Design</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>



        <article className="developed-app container" id="developed-app">
          <h1 className='heading-txt'>Developed application</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>



        <article className="user-testing container" id="user-testing">
          <h1 className='heading-txt'>User testing</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>



        <article className="deployment container" id="deployment">
          <h1 className='heading-txt'>Deployment</h1>
          <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>
        </article>

      </section>

    </>
  )

}