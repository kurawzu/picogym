import React from 'react'
import './Programs.css'
import Progr from './mediapages/PROGR.mp4'

const Programs = () => {
  return (
    <>
	<div className="vidBackp">
      <video autoPlay loop muted src={Progr}></video>
    </div>

	<div className="Prog">
		<h1>PROGRAMS WE <span className='red'>OFFER</span></h1>
		
		<div className="progCon">

<div className="progC">
	<h2>Strength Training</h2>
	<p>Boost muscle strength and endurance through resistance exercises with weights or bodyweight.</p>
</div>


<div className="progC">
	<h2>Cardio Training</h2>
	<p>Engage in activities such as treadmill running, stationary cycling, etc to elevate your heart rate and enhance cardiovascular fitness.</p>
</div>


<div className="progC">
	<h2>Fat Burning</h2>
	<p>Accelerate metabolism and burn calories efficiently through high-intensity workouts and a mix of cardio and strength exercises.</p>
</div>


<div className="progC">
	<h2>Health Fitness</h2>
	<p>Achieve holistic well-being by incorporating a balanced gym routine that integrates physical exercises and tailored nutrition plans.</p>
</div>







</div>

	

	

	



	</div>
    
    
    
    </>
  )
}

export default Programs