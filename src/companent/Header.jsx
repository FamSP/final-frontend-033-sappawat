import React from 'react';
import cv_sappawat from '../assets/Download/CV_Spaawat.pdf';

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNameMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <div>
      <nav id='header'>
        <div className='nav-logo'>
          <p className='nav-name'>OFFICE TOOL</p>
        </div>
        <div className='nav-menu' id="myNameMenu">
          <ul className='nav_menu_list'>
            <li className='nav-list'>
              <a href="#home" className='nav-link active-link'>Home</a>
            </li>
            <li className='nav-list'>
              <a href="#about" className='nav-link'>About</a>
            </li>
            <li className='nav-list'>
              <a href="#project" className='nav-link'>Popular</a>
            </li>
            <li className='nav-list'>
              <a href="#contact" className='nav-link'>Review</a>
            </li>
          </ul>
        </div>
        <div className='nav-menu-btn'>
          <i className='uil uil-bars' onClick={menuFunction}></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
