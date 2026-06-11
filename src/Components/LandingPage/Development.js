import React from "react";
import "../../Styles/Work.css";
import development1img from "../../assests/ccroad1.png";
import development2img from "../../assests/ccroad2.png";
import development3img from "../../assests/ccroad3.png";
import development4img from "../../assests/ccroad5.png";
import development5img from "../../assests/publicmeet5.jpg";
import development6img from "../../assests/inagurations6.jpg";
import development7img from "../../assests/Inagurations2.jpg";
import development8img from "../../assests/Inagurations3.jpg";


export default function Development() {
 
  return (
    <>
      <section className="development-sec py-3">
        <h2 className="develop-head">DEVELOPMENT</h2>
        <div className="container">
          <div className="development-card">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="development-img">
                  <img src={development1img} alt="" />
                  <img src={development2img} alt="" />
                  <img src={development3img} alt="" />
                  <img src={development4img} alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-body">
                  <ul>
                    <li>
                      The construction of CC roads in several areas  in Gogulapadu town.
                    </li>
                    <li>Rs. 30 lakhs CC road construction in Kesanapalli.</li>
                    <li>458 farmers received new pattadar passbooks.</li>
                    <li>
                      Development works started in several wards of Gurazala
                      Municipality
                    </li>
                    <li>Around ₹1.91 crore NUDA funds utilized.</li>
                    <li>
                      CC roads constructed in divisions 3, 16, 20, 22, 24, 25,
                      26 and 30.
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>


          <div className="development-card mt-5 mb-3">
            <div className="row g-0 align-items-center">
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-body">
                  <ul>
                    <li>
                      The construction of CC roads in several areas in Piduguralla Town.
                    </li>
                    <li>Rs. 30 lakhs CC road construction in Machavaram.</li>
                    <li>458 farmers received new pattadar passbooks.</li>
                    <li>
                      Development works started in several wards of Rentapalla
                      Municipality
                    </li>
                    <li>Around ₹1.91 crore NUDA funds utilized.</li>
                    <li>
                      CC roads constructed in divisions 3, 16, 20, 22, 24, 25,
                      26 and 30.
                    </li>
                  </ul>
                </div>
              </div>


               <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="development-img">
                  <img src={development5img} alt="" />
                  <img src={development6img} alt="" />
                  <img src={development7img} alt="" />
                  <img src={development8img} alt="" />
                </div>
              </div> 
            </div>
          </div>
        </div>

      </section>
      
    </>
  );
}
