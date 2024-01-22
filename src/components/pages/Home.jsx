import React from 'react'
import './Home.css'
import homeG from './mediapages/HOME.mp4'
import piclo from './mediapages/PICOGYM.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <> 
     <div className="vidBackg">
      <video autoPlay loop muted src={homeG}></video>
    </div>
    <div className="Home">

      <img src={piclo}/>

         <div className="text">
        <h1>TRAIN <span className='red'>INSANE</span></h1>
        <h1>OR</h1>
        <h1><span className='red'>REMAIN</span> THE SAME</h1>
        </div>

      <div className="homeCon">

        <div className="mem">
          <div className="memCon">
            <h3>MEMBERS</h3>
            <h3><span className="gold">+438</span></h3>
          </div>

          <div className="memCon">
            <h3>PROGRAMS</h3>
            <h3><span className="gold">+15</span></h3>
          </div>

          <div className="memCon">
            <h3>COACHES</h3>
            <h3><span className="gold">+12</span></h3>
          </div>
        </div>

        


      </div>

      <button className="shadow__btn">
          <Link to="/plans" >
              JOIN NOW
            </Link>
      </button>

    </div>
    
    
    
    
    </>
  )
}

export default Home