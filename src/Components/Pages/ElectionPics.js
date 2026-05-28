import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/elections.jpg";
import photo2 from "../../assests/elections1.jpg";
import photo3 from "../../assests/elections2.jpg";
import photo4 from "../../assests/elections3.jpg";
import photo5 from "../../assests/elections4.jpg";
import photo6 from "../../assests/elections5.jpg";
import photo7 from "../../assests/elections6.jpg";
import photo8 from "../../assests/elections7.jpg";
import photo9 from "../../assests/elections8.jpg";
import photo10 from "../../assests/elections9.jpg";
import photo11 from "../../assests/elections10.jpg";
import photo12 from "../../assests/elections11.jpg";
import photo13 from "../../assests/elections12.jpg";
import photo14 from "../../assests/elections13.jpg";
import photo15 from "../../assests/elections14.jpg";

function ElectionPics() {

  const allImages = [
    photo13,
    photo1,
    photo2,
    photo3,
    photo4,
    photo14,
    photo15,
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
              <img src={img}  loading="lazy" alt={`Yarapathineni ${index + 1}`} />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ElectionPics;