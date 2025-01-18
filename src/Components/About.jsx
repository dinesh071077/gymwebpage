import React from 'react'
import aboutimg from '../video/about video.mp4'
function About() {
  return (
    <div id='about'>
        <div className="about-image">
             <video src={aboutimg} autoPlay loop muted/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>A gym isn’t just a place for exercise; it’s the place you go to unwind, socialize, and work out. The gym is a whole experience. Some of the most successful facilities have several gym features that contribute to the kind of member experience that drives retention and sales. </p>
              <a href='/Readmore' ><button>VIWE MORE</button></a>
        </div>
    </div>
  )
}

export default About