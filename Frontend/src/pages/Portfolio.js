import React from 'react';
import '../styles/Portfolio.css';
import Work from '../components/Work';
import useFetch from '../hooks/useFetch';

const Portfolio = () => {
  const { data: works, error, loading } = useFetch('/portfolio')
  return (
    <>
      <div className='portfolio'>
        <div className='portfolio-container' >
          <div className='ctext'>
            <h1>Portfolio</h1>
            <p>All the projects we have done... </p>
          </div>
          <div className='portfolio-main'>
            {error && <div>{error}</div>}
            {loading && <div className='btext'><h2>Loading..</h2></div>}
            {works && <Work portfolios={works} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio