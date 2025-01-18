import React from 'react'
import videog from '../video/WhatsApp Video 2025-01-17 at 15.04.25_7ef2e844.mp4'
function Header() {
  return (
    <div id='main'> 
    <div className='video'>
      <video src={videog} autoPlay loop muted />
    </div>
      <div className='name'>
            <h2>STEP UP YOUR</h2>
            <h1><span>FITNESS</span> WITH US</h1>
            <p className='details'> Build Your BodyAnd Fitness With Professional Touch</p>
            <div className="header-btns">
                <a href='/Register' className='header-btn'>JOIN US</a>
            </div>
      </div>
    </div>
  )
}

export default Header