import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/spiritual.jpg";
import photo2 from "../../assests/spiritual2.jpg";
import photo3 from "../../assests/spiritual3.jpg";
import photo4 from "../../assests/spiritual4.jpg";
import photo5 from "../../assests/spiritual5.jpg";
import photo6 from "../../assests/spiritual6.jpg";
import photo7 from "../../assests/spiritual7.jpg";
import photo8 from "../../assests/spiritual8.jpg";
import photo9 from "../../assests/spiritual9.jpg";
import photo10 from "../../assests/spiritual10.jpg";


function SpiritualPics() {
  const allImages = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10
  ];
  return (
  <section className='photos-section'>
      <div className='photos-container'>
        <div className='pics-grid'>
        {allImages.map((img,index)=>(
          <div className='pics' key={index}>
            <img src={img}  loading="lazy" alt={`Photo ${index + 1}`} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}


export default SpiritualPics