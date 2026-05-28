import React from "react";
import ysrphoto from "../../assests/ysr.jpg";
import "../../Styles/About.css";


const About = () => {
    const terms = [
  { number: "1st", years: "1994 –\n1999", votes:"62,943",  result: "Won" },
  { number: "2nd", years: "2009 –\n2014", votes:"72,250",  result: "Won" },
  { number: "3rd", years: "2014 –\n2019", votes:"94,827",  result: "Won" },
  { number: "4th", years: "2024 –\nPresent", votes:"128,201", result: "Won" },
];
  const tags = [
    "TDP",
    "Agriculture Development",
    "Rural Infrastructure",
    "Education",
    "Healthcare",
    "Public Welfare",
  ];

  return (

    
    <section className="about-section">
    
    <div className="leader-profile">
    
      <div className="leader-photo">
      
        <div className="photo-placeholder">
         <img
            src={ysrphoto}
            alt="Yarapathineni Srinivasa Rao"
            className="leader-image"/>
     
        </div>
        
      </div>
      
  
      <div className="leader-content">
   
      <div className="section-tag">ABOUT</div>
      
        <h1 className="leader-name">Yarapathineni Srinivasa Rao</h1>
        <h3 className="leader-subtitle">
          MLA - TDP - Gurazala Assembly Constituency
        </h3>

        <p className="leader-description">
          Yarapathineni Srinivasa Rao is a senior Telugu Desam Party leader with
          over <strong>32+ Years</strong>  of public service. He has represented Gurazala Assembly
          Constituency in multiple terms and is known for his dedication to
          agriculture, infrastructure development, education, and public
          welfare across all 4 mandals of Palnadu
        </p>
           
           <div className="mla-terms-section">
            <p className="mla-terms-heading">4× Elected MLA for TDP — Gurazala</p>
            <div className="mla-terms-grid">
              {terms.map((term, i) => (
                <div className="term-card" key={i}>
                  <span className="term-number">{term.number}</span>
                  <span className="term-years">{term.years}</span>
                  <span className="term-votes">{term.votes} Votes</span>
                  <span className="term-won-badge">{term.result}</span>
                </div>
              ))}
            </div>
          </div>
    
        <div className="leader-details">
          <div className="detail-card">
            <span className="detail-label">Date of Birth</span>
            <strong>15 August 1968</strong>
          </div>

          <div className="detail-card">
            <span className="detail-label">Education</span>
            <strong>Graduate</strong>
          </div>

          <div className="detail-card">
            <span className="detail-label">Party</span>
            <strong>Telugu Desam Party (TDP)</strong>
          </div>

          <div className="detail-card">
            <span className="detail-label">MLA Since</span>
            <strong>2024 (Current Term)</strong>
          </div>

          <div className="detail-card">
            <span className="detail-label">Constituency</span>
            <strong>Gurazala, Palnadu District</strong>
          </div>

          <div className="detail-card">
            <span className="detail-label">Focus Areas</span>
            <strong>Agriculture & Welfare</strong>
          </div>
        </div>

     
        <div className="leader-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;