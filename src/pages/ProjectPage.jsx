import React from 'react'
import PlaceholderImg from '../assets/images/placeholder.png'
import NavBar from '../components/common/NavBar'

export default function ProjectPage(props) {
  return (
    <section className='project-details'>

      <NavBar></NavBar>

      <div className="hero-image flex-center">
        <img src={PlaceholderImg} alt="Brand identity" />
      </div>

      <div className='bg-black container'>
        <h1 className='heading-txt'>Apple</h1>
        <p className='body-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere numquam accusamus repudiandae delectus minima ducimus, pariatur, deserunt quas sequi sunt ullam. Debitis maxime explicabo odio fuga nam! Architecto, excepturi harum.</p>
      </div>

    </section>
  )

}