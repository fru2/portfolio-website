import React from 'react'
import PlaceholderImg from '../assets/images/placeholder.png'
import NavBar from '../components/common/NavBar'
import SideNav from '../components/common/SideNav'

export default function ProjectPage(props) {
  return (
    <section className='project-details'>

      <NavBar></NavBar> {/* FIXME: fixed with z-index 2 */}

      <SideNav></SideNav> {/* FIXME: fixed with index z-index 1 */}



      <div className="hero-image flex-center"> {/* FIXME: fixed with z-index 3 */}
        <img src={PlaceholderImg} alt="Brand identity" />
      </div>



      <article className='bg-black container'>
        <h1 className='heading-txt'>Apple</h1>
        <p className='body-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam accusamus repudiandae delectus minima ducimus, pariatur, deserunt quas sequi sunt ullam. Debitis maxime explicabo odio fuga nam! Architecto, excepturi harum.</p>

        <div className="project-overview">
          <div className="project-overview-item">
            <p>Role</p>
            <h3>Front-end (react), UI design</h3>
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
        <div>
          <img src="" alt="" />
        </div>
      </article>



      <article className="problem-statement container">
        <h1 className='heading-txt'>Problem statement</h1>
        <p className='body-txt'>The brand name XYZ that works as a shopping firm has an old interface which is confusing and requires a lot of click action to perform in order to get the job done.</p>

        <div className="image-comparison">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

      </article>



      <article className="ideation container">
        <h1 className='heading-txt'>Ideation session</h1>
        <p className='body-txt'>Discussing and researching about the plan(s) to achieve the project goals.</p>

        <img src="" alt="" />

      </article>

    </section>
  )

}