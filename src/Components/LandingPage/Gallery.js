import React from 'react'
import "../../Styles/Gallery.css";
import { MdDensitySmall, MdTempleHindu }from "react-icons/md";
import { CiFlag1} from "react-icons/ci";

import { PiBuildingsFill ,PiDotsThreeCircleVertical } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { FaUserTie  } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



function Gallery() {
  return (
    <section className='Photo-gallery-section'>
         <div className="gallery-heading"> Photo Gallery</div>
         <h3>Moments of Service & Leadership</h3>
         <p>Official photos from events, inaugurations and constituency visits — Gurazala, Palnadu</p>
    <div className='container'>

    <div className='gallery-buttons'>
        <NavLink to="/photos/all-pics" end className='gallery-btn'> <MdDensitySmall />All</NavLink>
        <NavLink to="/photos/elections-pics" className='gallery-btn'> <CiFlag1 />Elections</NavLink>
        <NavLink to="/photos/Inagurations-pics" className='gallery-btn'><PiBuildingsFill /> Inagurations</NavLink>
        <NavLink to="/photos/spiritual-pics" className='gallery-btn'><MdTempleHindu /> Spiritual</NavLink>
        <NavLink to="/photos/public-meet-pics" className='gallery-btn'> <BsPeopleFill /> Public Meets</NavLink>
        <NavLink to="/photos/leader-pics" className='gallery-btn'><FaUserTie /> Leaders</NavLink>
        <NavLink to="/photos/others-pics" className='gallery-btn'> <PiDotsThreeCircleVertical />Others</NavLink>
      </div>


    </div>
    <br/>
    </section>
    
  )
}

export default Gallery