import React from 'react'
import './About.css'
import aboutpic from './mediapages/whyus.jpg'

const About = () => {
  const gotoStartedClick = () => {
    window.open('https://maps.app.goo.gl/f8dGTUWP5TY2abit8', '_blank');
  };

  return (
    <>
    <div className="About">
      <div className="text1">
      <h1 onClick={gotoStartedClick}>PICO <span className="red">GYM</span></h1>
      <h2 onClick={gotoStartedClick}> <span className='red'>GO NOW TO</span>: MABILAO, SAN FABIAN</h2>
      <h3>09129625310</h3>
      </div>

      <img src={aboutpic}/>

      <p>We are more than just a gym. We're a supportive fitness family that fosters growth. With expert trainers, exceptional facilities, and diverse workouts, we personalize your fitness journey for a rewarding, enjoyable experience throughout.</p>

    </div>
    
    </>
  )
}

export default About