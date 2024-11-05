import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import avatar2 from '../assets/images/avatar2.jpg'
import avatar3 from '../assets/images/avatar3.jpg'

const ContactBox  = () => {
  return (
<section className='section' id='contact'>
  <div className='top-header'>
    <h1>Customer Review</h1>
  </div>

  <div className='row'>
      {/**About Me */}
      <div className='col'>
        <div className='about-info'>

          
            <h3>Json MomoA</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>

        <div className='col'>
        <div className='about-info'>
            <h3>Neo Armstrong</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>


        <div className='col'>
        <div className='about-info'>
            <h3>Jhon Conner</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>

        <div className='col'>
        <div className='about-info'>
            <h3>Adoff Biller</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
        </div>



        </div>
   
</section>
  )
}

export default ContactBox 
