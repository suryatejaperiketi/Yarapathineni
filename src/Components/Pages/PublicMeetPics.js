import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/publicmeet1.jpg";
import photo2 from "../../assests/publicmeet2.jpg";
import photo3 from "../../assests/publicmeet3.jpg";
import photo4 from "../../assests/publicmeet4.jpg";
import photo5 from "../../assests/publicmeet5.jpg";
import photo6 from "../../assests/publicmeet6.jpg";
import photo7 from "../../assests/publicmeet7.jpg";
import photo8 from "../../assests/publicmeet8.jpg";
import photo9 from "../../assests/publicmeet9.jpg";
import photo10 from "../../assests/publicmeet10.jpg";
import photo11 from "../../assests/publicmeet11.jpg";
import photo12 from "../../assests/publicmeet12.jpg";
import photo13 from "../../assests/publicmeet13.jpg";
import photo14 from "../../assests/publicmeet14.jpg";
import photo15 from "../../assests/publicmeet15.jpg";


function PublicMeetPics() {
  const allImages = [
    photo15,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14
   
  ];
  return (
  <section className='photos-section'>
      <div className='photos-container'>
        <div className='pics-grid'>
        {allImages.map((img,index)=>(
          <div className='pics' key={index}>
            <img src={img}  loading="lazy" alt={`Yarapathineni ${index + 1}`} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}


export default PublicMeetPics