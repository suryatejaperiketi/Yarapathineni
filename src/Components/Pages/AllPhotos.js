import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/Inagurations.jpg";
import photo2 from "../../assests/allpics1.jpg";
import photo3 from "../../assests/allpics2.jpg";
import photo4 from "../../assests/allpics3.jpg";
import photo5 from "../../assests/elections.jpg";
import photo6 from "../../assests/leaders.jpg";
import photo7 from "../../assests/spiritual.jpg";
import photo8 from "../../assests/allpics.jpg";
import photo9 from "../../assests/allpics4.jpg";
import photo10 from "../../assests/allpics5.jpg";

function AllPhotos() {

  const allImages = [
    photo10,
    photo1,
    photo2,
    photo3,
    photo9,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8
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

export default AllPhotos;