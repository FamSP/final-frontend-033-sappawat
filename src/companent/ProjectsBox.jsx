import React from 'react'
import thing1 from '../assets/images/1.png'
import thing2 from '../assets/images/2.png'
import thing3 from '../assets/images/3.png'
import thing4 from '../assets/images/4.png'
import thing5 from '../assets/images/5.png'
import thing6 from '../assets/images/6.png'

const ProjectsBox = () => {
  return (
    <section className='section' id='project'>
      <div className='top-header'>
        <h1>Popular</h1>
      </div>
      <div className='project-container'>

        <div className='project-box'>
        
        <div className='image'>
          <img src={thing1} alt="avatar" />
        </div>
      
          <h3>Pen</h3>
          <label>For write</label>
        </div>


        <div className='project-box'>
        <div className='image'>
          <img src={thing2} alt="avatar" />
        </div>
          <h3>NoteBook</h3>
          <label>For Note</label>
        </div>


        <div className='project-box'>
       <div className='image'>
          <img src={thing3} alt="avatar" />
        </div>
          <h3>rulur</h3>
          <label>For Calculate</label>
        </div>

        <div className='project-box'>
        <div className='image'>
          <img src={thing4} alt="avatar" />
        </div>
          <h3>Gule</h3>
          <label>For Adtrast</label>
        </div>

        <div className='project-box'>
        <div className='image'>
          <img src={thing5} alt="avatar" />
        </div>
          <h3>Doucument</h3>
          <label>For keepfile</label>
        </div>

        <div className='project-box'>
        <div className='image'>
          <img src={thing6} alt="avatar" />
        </div>
          <h3>Printter</h3>
          <label>For print</label>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBox
