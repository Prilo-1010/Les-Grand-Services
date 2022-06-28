import React from 'react'
import '../styles/About.css';
import discover from '../assests/discover.svg'
import build from '../assests/build.svg'
import deliver from '../assests/deliver.svg'

function About() {

  return (
    <>
      <div className='about-main'>
        <div className='about1'>
          <div className='about-item'>
            <h2>About Us</h2>
            <p>Le Grand Service is an online company that brings quality and professional work to you.
              We offer services like NFT Animation &Development , Video & Marketing Advice, Event Management and last E-learning development.
              Yes we provide all these services for you with our excellent team that delivers in time.
              Le Grand Service has an accomplished team who are able to stretch your creative wings and deliver beyond your expectations.</p>
          </div>
        </div>
        <h2>How we oparate</h2>
        <div className='process'>
          <div class="process-box">
            <div class="icon-box">
              <img src={discover} alt="discover" />
            </div>
            <h3>Discover</h3>
            <p>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.
            </p>
          </div>
          <div class="process-box">
            <div class="icon-box">
              <img src={build} alt="build" />
            </div>
            <h3>Build</h3>
            <p>Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.
            </p>
          </div>
          <div class="process-box">
            <div class="icon-box">
              <img src={deliver} alt="deliver" />
            </div>
            <h3>Deliver</h3>
            <p>We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About