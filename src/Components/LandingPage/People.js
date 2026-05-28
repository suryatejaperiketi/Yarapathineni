import React from "react";
import "../../Styles/People.css";

import img1 from "../../assests/elections3.jpg";
import img2 from "../../assests/others10.jpg";

import img4 from "../../assests/elections9.jpg";
import img7 from "../../assests/people.jpg";
import img8 from "../../assests/people1.jpg";
import img9 from "../../assests/people2.jpg";
import img10 from "../../assests/people3.jpg";
import img11 from "../../assests/people4.jpg";
import img12 from "../../assests/people5.jpg";

function People() {

  const images = [img1, img2, img4, img7,img8,img9,img10,img11,img12];

  return (
    <section className="people-section py-5">

      <div className="container-fluid">

        <h2 className="section-tag mb-3">
          Moments with the People
        </h2>

        <div className="slider-wrapper">

          <div className="slider-track">

            {images.concat(images).map((img, index) => (
              <div className="card image-card border-0" key={index}>

                <img
                  src={img}
                  alt="people"
                  className="card-img-top"
                />

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default People;