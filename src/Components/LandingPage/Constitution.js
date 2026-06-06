import React from "react";
import "../../Styles/Constitution.css";
import { FaRegBuilding } from "react-icons/fa";
import { TbTool } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineBarChart } from "react-icons/md";

function Constitution() {
  return (
    <section className="constitution-section">
      <div className="constitution-container">
        <div className="section-tag">Constituency</div>
        <h3>Gurazala — Our Constituency</h3>
        <p>Assembly Constituency No. 100 · Palnadu District · Andhra Pradesh</p>
        <div className="container">
          <iframe
            title="Gurazala Satellite View"
            src="https://maps.google.com/maps?q=Gurazala,Andhra%20Pradesh&t=k&z=13&output=embed"
            style={{ width: "100%", height: "70vh", border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>


        </div>
        <div className="container">
          <div className="mandal-section">
            <h3>4 Official Mandals in Gurazala Constituency</h3>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Gurazala</h4>
                  <p>Constituency (HQ)</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Dachepalli</h4>
                  <p>Mandal</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Piduguralla</h4>
                  <p>Mandal</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="mandal-card">
                  <h4>Machavaram</h4>
                  <p>Mandal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  <FaRegBuilding className="const-icon" />
                  Constituency Overview
                </h3>
                <ul>
                  <li>Gurazala — Palnadu District, AP</li>
                  <li>Assembly Segment No: 100</li>
                  <li>Total voters: ~2.68 lakh (2,68,469)</li>
                  <li>Total population: ~4.5–5.0 lakh</li>
                  <li>Total area: ~1,000+ sq. km</li>
                  <li>District HQ: Narasaraopet</li>
                  <li>Constituency HQ: Gurazala</li>
                  <li>Lok Sabha: Narasaraopet segment</li>
                  <li>Reservation: General (Unreserved)</li>
                  <li>Current MLA: Yarapathineni Srinivasa Rao</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="constituency-key-stats">
                <h3>
                  <TbTool className="const-icon" /> Key Issues Addressed
                </h3>
                <ul>
                  <li>Irrigation and water availability for farmers</li>
                  <li>Support for chilli, cotton and paddy farmers</li>
                  <li>Rural road connectivity across 4 mandals</li>
                  <li>Drinking water supply to villages</li>
                  <li>Employment through industrial projects</li>
                  <li>Education and skill development for youth</li>
                  <li>RTC and public transport improvements</li>
                  <li>Industrial development — cement and limestone sector</li>
                </ul>
              </div>
            </div>
          </div>
         
          </div>
        
        
      </div>
    </section>
  );
}

export default Constitution;
