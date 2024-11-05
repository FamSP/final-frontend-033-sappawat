import React from 'react'


const Card = () => {
  return (
    <section className='section' id='about'>

    <div className='row'>
      {/**About Me */}
      <div className='col'>
        <div className='about-info'>
            <h3>Fast Delivery</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>

        <div className='col'>
        <div className='about-info'>
            <h3>Great Customer Service</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>


        <div className='col'>
        <div className='about-info'>
            <h3>Quality Tool</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>

        <div className='col'>
        <div className='about-info'>
            <h3>Affordable Price</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>



        </div>
   

        <div>
        <div className='scroll-icon-box'>
         <a href='#about' className='scroll-btn'>
          <i className='uil uil-mouse-alt'></i>
          <p>Scroll Down</p>
          </a>   
        </div>
      </div>
   
    </section>
  )}

export default Card
