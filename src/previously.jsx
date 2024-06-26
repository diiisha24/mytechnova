import React from 'react'
import CarouselComponent from './Carousel'
import './previously.css'
import { NavLink } from 'react-router-dom'
import { Button } from "../src/styles/Button";
function Previously() {
  const handleVisitGalleryClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (

    <div className="prev-container container grid grid-two-column">
      <div className='prev-container-desc'>
        <h2 style={{ paddingTop: '150px' }} className='social-icon-heading'><b>"Moments in Time"</b></h2>
        <p className='prevpara'> "Explore the past triumphs and memorable moments that have shaped
          the legacy of our university's innovative spirit."
        </p>
        {/* <div className="button-container">
          <Button className='btn visitgalbtn eventpage-btn' onClick={handleVisitGalleryClick}>
            <NavLink to='/gallery'>Visit Gallery</NavLink>
          </Button>
        </div> */}
         <div className="button-container">
          <NavLink to='/gallery' onClick={handleVisitGalleryClick}>
            <Button className='btn visitgalbtn eventpage-btn'>
              Visit Gallery
            </Button>
          </NavLink>
        </div>

      </div>
      <div className="carousel-container">
        <CarouselComponent first="./images/301.jpeg" second="./images/301.jpeg" third="./images/301.jpeg" />
      </div>
    </div>
  )
}

export default Previously