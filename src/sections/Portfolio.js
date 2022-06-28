import React from 'react';
import '../styles/Portfolio.css';
import Work from '../components/Work';

function Portfolio() {
  return (
    <>
    <div className='portfolio'>
    <div className='portfolio-container' >
            <h1>Our Portfolio</h1>
          <div className='portfolio-main'>
            <Work title="LGS"/>
            <Work title="LGS"/>
            <Work title="LGS"/>
            <Work title="LGS"/>
            <Work title="LGS"/>
            <Work title="LGS"/> 
          </div>
      </div>
    </div>

    </>
  )
}

export default Portfolio