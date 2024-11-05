import React from 'react'
import avatar from '../assets/images/avatar.jpg'

const FeaturedBox = () => {
  return (
    <div>
     <section className='featured-box' id="home">
      <div className='featured-text'> 
        <div className='featured-text-card'>
          <span>OFFICE TOOL</span>
        </div>

        <div className='featured-name'>
          We're <span className='typedText'></span>
        </div>
        <div className='featured-text-info'>
          <p>
           The final choice of you solution that you find
          </p>
        </div>
        <div className='featured-text-btn'>
      <button className='btn'>
            Shop NOW <i className='uil uil-import'></i>
          </button>

          <button className='btn'>
            Know <i className='uil uil-import'></i>
          </button>
      </div>
      


      <div className='social_icons'>
      <div className='icon'>
        <a href="https://www.facebook.com/keroro.kokoro.3">
          <i className='uil uil-facebook'></i>
        </a>
      </div>

      <div className='icon'>
        <a href="https://www.instagram.com/fam_sp/">
          <i className='uil uil-instagram'></i>
        </a>
      </div>

      <div className='icon'>
        <a href="https://github.com/FamSP">
          <i className='uil uil-github'></i>
        </a>
      </div>
      </div>
    
      </div>
      

      <div className='featured-image'>
        <div className='image'>
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      

      
     </section>
    </div>

  )
}

export default FeaturedBox
