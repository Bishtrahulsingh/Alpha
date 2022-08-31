import React from 'react'
import vid0 from "../assets/videos/bannervideo0.mp4"
import "./Css/Herobanner.css"

const Herobanner = () => {
  return (
    <>
      <div id='Home' className="heroelement">

        <div className="banner">
          <video className='video' loop autoPlay muted>
            <source src={vid0} type="video/mp4" />
          </video>
        </div>

        <div className='bannertext'>
          <h2>Fitness Club</h2>
          <h1>Sweat,Smile <br />And Repeat</h1>
          <p>Check out the most effective exercise for you</p>
          <a href="#Exercises"><button>Explore Exercises</button></a>
        </div>

      </div>
    </>
  )
}

export default Herobanner