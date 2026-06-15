import React from 'react'
import "../../Styles/Video.css";


function Videos() {
     const allVideos = [
    "https://www.youtube.com/embed/OeS38ySDo7A",
    "https://www.youtube.com/embed/c2hlQIj88_A?si=q_i0CLuyoTTTtBoZ",
    "https://www.youtube.com/embed/pxUTD_ZNi_M?si=J4xd_LtH57skERkF",
    "https://www.youtube.com/embed/V5qEAaS0918?si=jwCj7v8FnoMNjRQj",
    "https://www.youtube.com/embed/uXR7CbhF-3I?si=O30YcLwwOJGYA56t",
    "https://www.youtube.com/embed/eMDvIrpYey4?si=O_18ujkO9BDSME0_"
  ];


  return (
    <section className='video-gallery-section'>
         <div className="vedio-gall-heading">Video Gallery</div>
         <h3>Moments of Service & Leadership</h3>
         <p>Official videos from events, inaugurations and constituency visits — Gurazala, Palnadu</p>
  <div className='video-container'>
        <div className='vedios-grid'>

          {allVideos.map((video, index) => (
            <div className='videos' key={index}>
             <iframe
                src={video}
                title={`Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}

        </div>
      </div>
      <br/>
    </section>
  )
}

export default Videos