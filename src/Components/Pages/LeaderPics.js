import React from 'react'
import "../../Styles/Gallery.css";

import photo1 from "../../assests/leaders.jpg";
import photo2 from "../../assests/leaders1.jpg";
import photo3 from "../../assests/leaders8.jpg";
import photo4 from "../../assests/leaders3.jpg";
import photo5 from "../../assests/leaders4.jpg";
import photo6 from "../../assests/leaders5.jpg";
import photo7 from "../../assests/leaders6.jpg";
import photo8 from "../../assests/leaders7.jpg";
import photo9 from "../../assests/leaders2.jpg";
import photo10 from "../../assests/leaders9.jpg";

function  LeaderPics() {
  const allImages = [
    photo10,
    photo1,
    photo2,
    photo3, 
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
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


export default LeaderPics