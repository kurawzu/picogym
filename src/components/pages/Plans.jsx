import React from 'react'
import './Plans.css'
import rdyVid from './mediapages/Plans.mp4'

const Plans = () => {

	const handleGetStartedClick = () => {
		window.open('https://www.facebook.com/pico.gymm', '_blank');
	  };

  return (
    <>
	 <div className="vidBackg1">
      <video autoPlay loop muted src={rdyVid}></video>
    </div>
    <div className="Plans">
   

    <h1>ARE YOU <span className="red">READY</span>?</h1>
		

		<div className="plapla">

			<div className="plaCon">
				<h2 className='dur'>ONE DAY</h2>
				<h1 className='price'>₱25</h1>

				<ul className="lists">
						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>UNLI USE OF GYM EQUIPMENTS</span>
						</li>
						
					</ul>

					<button onClick={handleGetStartedClick}>GET STARTED</button>
				</div>


				<div className="plaCon">
				<h2 className='dur'>ONE YEAR</h2>
				<h1 className='price'>₱5K</h1>

				<ul className="lists">

						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>UNLI USE OF GYM EQUIPMENTS</span>
						</li>

						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>PRIVATE COACH</span>
						</li>


						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>FREE CONSULTATION</span>
						</li>
						
					</ul>

					<button onClick={handleGetStartedClick}>GET STARTED</button>
				</div>



				<div className="plaCon">
				<h2 className='dur'>ONE MONTH</h2>
				<h1 className='price'>₱5H</h1>

				<ul className="lists">

						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>UNLI USE OF GYM EQUIPMENTS</span>
						</li>

						<li className="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>FREE CONSULTATION</span>
						</li>
						
					</ul>

					<button onClick={handleGetStartedClick}>GET STARTED</button>
				</div>





		</div>





    </div>
    
    
    
    
    </>
  )
}

export default Plans