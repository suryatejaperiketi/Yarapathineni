import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/others.jpg";
import photo2 from "../../assests/others1.jpg";
import photo3 from "../../assests/others2.jpg";
import photo4 from "../../assests/others3.jpg";
import photo5 from "../../assests/others4.jpg";
import photo6 from "../../assests/others5.jpg";
import photo7 from "../../assests/others6.jpg";
import photo8 from "../../assests/others7.jpg";
import photo9 from "../../assests/others8.jpg";
import photo10 from "../../assests/others9.jpg";
import photo11 from "../../assests/others10.jpg";
import photo12 from "../../assests/others11.jpg";
import photo13 from "../../assests/others12.jpg";
import photo14 from "../../assests/others13.jpg";

function Others() {

  const allImages = [
    photo14,
    photo1,
    photo2,
    photo3,
    photo4,
    photo13,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12
    
  ];

  return (
    <section className='photos-section'>
      <div className='photos-container'>
        <div className='pics-grid'>

          {allImages.map((img, index) => (
            <div className='pics' key={index}>
              <img src={img}  loading="lazy" alt={`Photo ${index + 1}`} />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Others;