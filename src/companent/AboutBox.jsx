import React from 'react'
import avatar from '../assets/images/avatar.jpg'


const AboutBox = () => {
  return (
    <section className='section' id='about'>
    <div className='top-header'>
      <h1>About US</h1>
    </div>
    <div className='featured-box'>
    <div className='featured-text'> 

        <div className='featured-text-info'>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      </div>
      

      <div className='featured-image'>
        <div className='image'>
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      </div>

  

     

  

    </section>
  )}

export default AboutBox
