import '../styles/Services.css'
import ServiceDetails from '../components/ServiceDetails'

function Service() {
  return (
    <>
      <div className='services'>
        <h2>Comprehensive Service</h2>
        <div className='subService'>
          <ServiceDetails
            header="Data Science"
            subheader="coming soon"
            details='FGHJJKHKJHGJVJBVJ' />
          <ServiceDetails
            header="Data Science"
            subheader="coming soon" />
          <ServiceDetails
            header="Data Science"
            subheader="coming soon" />
          <ServiceDetails
            header="Data Science"
            subheader="coming soon" />
          <ServiceDetails
            header="Data Science"
            subheader="coming soon" />
          <ServiceDetails
            header="Data Science"
            subheader="coming soon" />
        </div>
      </div>
    </>
  )
}

export default Service