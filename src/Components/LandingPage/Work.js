import React from 'react'
import "../../Styles/Work.css";
import roadimg from "../../assests/road.png";
import cropimg from "../../assests/Crops.png";
import irrigationimg from "../../assests/Irrigation.png";
import educationimg from "../../assests/Education.png";
import youthimg from "../../assests/Youth.png";
import healthcareimg from "../../assests/Healthcare.png";

function Work() {
  return (
    <section className="work-section">
        <h2 className="work-heading">Development Work For The People Of Gurzala</h2> 
        <p className="work-description">
          Focused On Agriculture, Infrastructure and Welfare across all 4 Mandals
        </p>

       <div className='container'>
          <div className='cards-grid'>
            <div className='work-card'>
                <img src={roadimg} alt="Road Icon" className='work-card-icon'/>
                <h3 className='card-title'>Road & Infrastructure</h3>
                <p className='card-description'>
                    Promoted road upgrades, village connectivity, and transport improvements across Gurazala, Dachepalli, Piduguralla, and Machavaram, strengthening infrastructure and access throughout the constituency.     
                </p>
                <button className='work-card-btn'>4 Mandals Connected</button>
            </div>
             <div className='work-card'>
                    <img src={cropimg} alt="Crops Icon" className='work-card-icon'/>
                <h3 className='card-title'>Agriculture & Farmer Welfare</h3>
                <p className='card-description'>
                    As an agriculturist, he supported irrigation, crop assistance, and farmer welfare initiatives, advocating better water resources and agricultural infrastructure for farming families across Palnadu.
                </p>
                <button className='work-card-btn'>Farmer's Leader</button>
            </div>
             <div className='work-card'>
                    <img src={irrigationimg} alt="Irrigation Icon" className='work-card-icon'/>
                <h3 className='card-title'>Irrigation Projects</h3>
                <p className='card-description'>
                   Supported initiatives to enhance irrigation and drinking water facilities in the constituency, including efforts to secure better water resources for agriculture and rural communities.</p>
                   <button className='work-card-btn'>Palnadu Belt</button>
            </div>
             <div className='work-card'>
                    <img src={educationimg} alt="Education Icon" className='work-card-icon'/>
                <h3 className='card-title'>Education Support</h3>
                <p className='card-description'>
                    Encouraged improvements in government schools, educational infrastructure, and access to quality education for students from rural areas. </p>
                    <button className='work-card-btn'>Rural Education</button>
            </div>
             <div className='work-card'>
                    <img src={youthimg} alt="Youth Icon" className='work-card-icon'/>
                <h3 className='card-title'>Youth Employment</h3>
                <p className='card-description'>
                    Promoted skill development, employment awareness, and opportunities for youth to build sustainable careers and livelihoods.</p>
                    <button className='work-card-btn'>Youth Focus</button>
            </div>
             <div className='work-card'>
                    <img src={healthcareimg} alt="Healthcare Icon" className='work-card-icon'/>
                <h3 className='card-title'>Healthcare Access</h3>
                <p className='card-description'>
                    Worked to improve healthcare services in the constituency and supported efforts to strengthen medical infrastructure, including the development of the Government Medical College and Hospital at Piduguralla. </p>
                    <button className='work-card-btn'>PHC Upgrades</button>
            </div>
            
            
        </div>
       </div>
      </section>
  )
}

export default Work