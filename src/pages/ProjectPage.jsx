import React from 'react'
import PlaceholderImg from '../assets/images/placeholder.png'
import ScrollToTop from '../components/ScrollToTop'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import { useNavigate } from 'react-router-dom'



export default function ProjectPage(props) {

  let { data } = props;

  const navigate = useNavigate();
  const backBtn = () => {
    navigate("/");
  }


  return (
    <>

      <ScrollToTop />

      <SideNav></SideNav>

      <NavBar isMain={false} onclick={backBtn}></NavBar>


      <section className='project-details'>

        <div className="hero-image flex-center">
          <img src={data.img} alt="Brand identity" />
        </div>



        <article className='about-project bg-black-gradient container' id='about-project'>
          <h1 className='heading-txt'>{data.title}</h1>
          <p className='body-txt'>{data.desc}</p>

          <div className="project-overview">
            <div className="project-overview-item">
              <p>Role</p>
              {data.overview.role.map((role, index) => (
                <h3 key={index}>{role}</h3>
              ))}
            </div>
            <div className="project-overview-item">
              <p>Tools</p>
              {data.overview.tools.map((item, index) => (
                <h3 key={index}>{item}</h3>
              ))}

            </div>
            <div className="project-overview-item">
              <p>Type</p>
              <h3>{data.overview.type}</h3>
            </div>
            <div className="project-overview-item">
              <p>Duration</p>
              <h3>{data.overview.duration}</h3>
            </div>

          </div>


          <article className="renders-grid">
            {data.promoImg.map((item, index) => (
              <img key={index} src={item.url} alt={item.alt} />
            ))}
          </article>


        </article>


        <article className="problem-statement container" id="problem-statement">
          <h1 className='heading-txt'>Problem statement</h1>
          <p className='body-txt'>{data.problemStatement}</p>

          <div className="image image-comparison">
            <img src={data.compareImg.oldImg} alt="" />
            <img src={data.compareImg.newImg} alt="" />
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
          <h1 className='heading-txt'>Competitor research</h1>
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