import React from 'react';
import '../styles/Home.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div className='home'>
          <div className='subHero  animate-this-element' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className='subHero1'>
              <h1>Make your </h1>
              <h1>Service greater</h1>
              <h1>With <span>LGS</span></h1>
              <p><span className='p'>Le Grand Service </span></p>
              <Link to="/portfolio">
                <Button
                  buttonStyle='btn-other'
                  buttonSize='btn-medium'
                  type='submit'
                  onClick={console.log('Lolo')}
                >
                  Get to know us
                </Button>
              </Link>
            </div>

          </div>

        </div>
    </>
  )
}

export default Home