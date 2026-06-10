// import React from "react";
// import {
//   FaLocationDot,
//   FaFacebookF,
//   FaInstagram,
//   FaWhatsapp,
//   FaPhone,
//   FaClock,
// } from "react-icons/fa6";

// import { MdEmail } from "react-icons/md";
// import sampleimg from "../../assests/allpics.jpg";
// import "../../Styles/ContactUs.css";

// function ContactUs() {
//   return (
//     <>
   
//       <section className="contact-hero">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7">
//               <span className="contact-badge">CONTACT MLA GARU</span>

//               <h1>
//                 Reach Your MLA —<span>Your Voice Matters</span>
//               </h1>

//               <p>
//                 Submit grievances, welfare requests, development suggestions and
//                 public concerns directly to Yarapathineni Srinivasa Rao Garu.
//                 Every citizen's voice is important.
//               </p>

//               <div className="hero-buttons">
//                 <a href="#form">
//                   <button className="btn btn-warning me-3 mb-2">
//                     Submit Grievance
//                   </button>
//                 </a>
//               </div>
//             </div>

//             <div className="col-lg-5 text-center">
//               <img src={sampleimg} alt="MLA" className="hero-mla-image" />
//             </div>
//           </div>
//         </div>
//       </section>


//       <section className="contact-main-section">
//         <div className="container">
//           <div className="row g-4">
//             {/* LEFT CARD */}
//             <div className="col-lg-4">
//               <div className="contact-info-card">
//                 <h3>Contact Information</h3>

//                 <div className="contact-content">
//                   <div className="contact-icon">
//                     <FaLocationDot />
//                   </div>

//                   <div className="contact-text">
//                     <h6>Constituency Office</h6>
//                     <h5>
//                       D. No. 7-323, Behind Dr. Anjireddy Complex, Piduguralla
//                       Mandal, Palnadu District, Andhra Pradesh, Pin-522413.
//                     </h5>
//                   </div>
//                 </div>

//                 <div className="contact-content">
//                   <div className="contact-icon">
//                     <FaPhone />
//                   </div>

//                   <div className="contact-text">
//                     <h6>Phone</h6>
//                     <h5>+91 9849355955</h5>
//                   </div>
//                 </div>

//                 <div className="contact-content">
//                   <div className="contact-icon">
//                     <FaWhatsapp />
//                   </div>

//                   <div className="contact-text">
//                     <h6>WhatsApp</h6>
//                     <h5>+91 7995944299</h5>
//                   </div>
//                 </div>

//                 <div className="contact-content">
//                   <div className="contact-icon">
//                     <MdEmail />
//                   </div>

//                   <div className="contact-text">
//                     <h6>Email</h6>
//                     <h5>yarapathinenimla@gmail.com</h5>
//                   </div>
//                 </div>

//                 <div className="contact-content">
//                   <div className="contact-icon">
//                     <FaClock />
//                   </div>

//                   <div className="contact-text">
//                     <h6>Office Timings</h6>
//                     <h5>
//                       Mon – Sat
//                       <br />
//                       10:00 AM – 5:00 PM
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             </div>

       
//             <div className="col-lg-8" id="form">
//               <div className="contact-form">
//                 <h3>Submit Your Grievance</h3>

//                 <p>
//                   Fill in the details below and our office will review your
//                   request.
//                 </p>

//                 <form>
//                   <div className="form-grid">
//                     <div className="form-group">
//                       <label>Full Name *</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Full Name"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Mobile Number *</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Mobile Number"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Voter ID *</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter Voter ID"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Village *</label>

//                       <select className="form-select" id="village">
//                         <option value="">Select Village</option>

//                         <option value="Pinnelli">Pinnelli</option>
//                         <option value="Vemavaram">Vemavaram</option>
//                         <option value="Gangireddypalem">Gangireddypalem</option>
//                         <option value="Morjampadu">Morjampadu</option>
//                         <option value="Nagulavaram">Nagulavaram</option>
//                         <option value="Srirukminipuram">Srirukminipuram</option>
//                         <option value="Rentapalla">Rentapalla</option>
//                         <option value="Chennayapalem">Chennayapalem</option>
//                         <option value="Velpuru">Velpuru</option>

//                         <option value="Piduguralla">Piduguralla</option>
//                         <option value="Brahmanapalle">Brahmanapalle</option>
//                         <option value="China Agraharam">China Agraharam</option>
//                         <option value="Janapadu">Janapadu</option>
//                         <option value="Tummalacheruvu">Tummalacheruvu</option>
//                         <option value="Kamepalli">Kamepalli</option>
//                         <option value="Pillutla">Pillutla</option>
//                         <option value="Peddadevulapalli"></option>
//                         <option value="Guthikonda">Guthikonda</option>

//                         <option value="Dachepalli">Dachepalli</option>
//                         <option value="Nadikudi">Nadikudi</option>
//                         <option value="Tangeda">Tangeda</option>
//                         <option value="Kesanapalli">Kesanapalli</option>
//                         <option value="Madinapadu">Madinapadu</option>
//                         <option value="Katragadda">Katragadda</option>
//                         <option value="Ramapuram">Ramapuram</option>
//                         <option value="Kothapalli">Kothapalli</option>
//                         <option value="Pondugula">Pondugula</option>
//                         <option value="Vedadri">Vedadri</option>

//                         <option value="Cherlagudipadu">Cherlagudipadu</option>
//                         <option value="Daida">Daida</option>
//                         <option value="Gangavaram">Gangavaram</option>
//                         <option value="Gogulapadu">Gogulapadu</option>
//                         <option value="Gottimukkala">Gottimukkala</option>
//                         <option value="Gurazala">Gurazala</option>
//                         <option value="Madugula">Madugula</option>
//                         <option value="Pallegunta">Pallegunta</option>
//                         <option value="Pulipadu">Pulipadu</option>
//                         <option value="Telukutla">Telukutla</option>
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label>Mandal *</label>
//                       <select className="form-select">
//                         <option>Select Mandal</option>
//                         <option value="guruzala">Gurazala</option>
//                         <option value="dachepalli">Dachepalli</option>
//                         <option value="piduguralla">Piduguralla</option>
//                         <option value="machavaram">Machavaram</option>
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label>Category *</label>
//                       <select className="form-select">
//                         <option>Select Category</option>
//                         <option value="irrigation">Irrigation</option>
//                         <option value="education">Education</option>
//                         <option value="health">Health</option>
//                         <option value="infrastructure">Infrastructure</option>
//                         <option value="other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-group mt-3">
//                     <label>Subject *</label>
//                     <input type="text" className="form-control" />
//                   </div>

//                   <div className="form-group mt-3">
//                     <label>Detailed Grievance *</label>
//                     <textarea rows="5" className="form-control"></textarea>
//                   </div>

//                   <button type="submit" className="btn btn-primary mt-4">
//                     Submit Grievance
//                   </button>
//                 </form>
//               </div>
//             </div>
         

//              <section className="constitution-section">
//         <div className="constitution-container">
//           <div className="section-tag">Constituency</div>
//           <h3>Gurazala — Our Constituency</h3>
//           <p>
//             Assembly Constituency No. 100 · Palnadu District · Andhra Pradesh
//           </p>
//           <div className="container">
//             <iframe
//               title="Gurazala Satellite View"
//               src="https://maps.google.com/maps?q=Gurazala,Andhra%20Pradesh&t=k&z=13&output=embed"
//               style={{ width: "100%", height: "70vh", border: "0" }}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//           <br/>
          
//         </div>
//       </section>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default ContactUs;


import React from "react";
import {
  FaLocationDot,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaClock,
  FaYoutube,
  FaUsers,
  FaCircleCheck,
  FaHeadset,
  FaBuilding,
  FaPaperPlane,
  FaLock,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaLightbulb, FaAmbulance } from "react-icons/fa";
import sampleimg from "../../assests/allpics.jpg";
import "../../Styles/ContactUs.css";

function ContactUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="contact-badge">CONTACT MLA GARU</span>
              <h1>
                Reach Your MLA —<span>Your Voice Matters</span>
              </h1>
              <p>
                Submit grievances, welfare requests, development suggestions and
                public concerns directly to Yarapathineni Srinivasa Rao Garu.
                Every citizen's voice is important.
              </p>
              <div className="hero-buttons">
                <a href="#form">
                  <button className="btn btn-warning me-3 mb-2">
                    <FaPaperPlane style={{ marginRight: 8 }} />
                    Submit Grievance
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img src={sampleimg} alt="MLA" className="hero-mla-image" />
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <FaUsers className="stat-icon" />
              <div>
                <strong>50,000+</strong>
                <span>Citizens Helped</span>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <FaCircleCheck className="stat-icon" />
              <div>
                <strong>1,000+</strong>
                <span>Grievances Resolved</span>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <FaHeadset className="stat-icon" />
              <div>
                <strong>24/7</strong>
                <span>Public Support</span>
              </div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <FaBuilding className="stat-icon" />
              <div>
                <strong>100+</strong>
                <span>Development Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM SECTION */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row g-4">
            {/* LEFT CARD */}
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h3>Contact Information</h3>

                <div className="contact-content">
                  <div className="contact-icon"><FaLocationDot /></div>
                  <div className="contact-text">
                    <h6>Constituency Office</h6>
                    <h5>D. No. 7-323, Behind Dr. Anjireddy Complex, Piduguralla Mandal, Palnadu District, Andhra Pradesh, Pin-522413.</h5>
                  </div>
                </div>

                <div className="contact-content">
                  <div className="contact-icon"><FaPhone /></div>
                  <div className="contact-text">
                    <h6>Phone</h6>
                    <h5>+91 9849355955</h5>
                  </div>
                </div>

                <div className="contact-content">
                  <div className="contact-icon"><FaWhatsapp /></div>
                  <div className="contact-text">
                    <h6>WhatsApp</h6>
                    <h5>+91 7995944299</h5>
                  </div>
                </div>

                <div className="contact-content">
                  <div className="contact-icon"><MdEmail /></div>
                  <div className="contact-text">
                    <h6>Email</h6>
                    <h5>yarapathinenimla@gmail.com</h5>
                  </div>
                </div>

                <div className="contact-content">
                  <div className="contact-icon"><FaClock /></div>
                  <div className="contact-text">
                    <h6>Office Timings</h6>
                    <h5>
                      Mon – Sat<br />10:00 AM – 5:00 PM
                    </h5>
                    <span className="sunday-closed">Sunday: Closed</span>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="connect-section">
                  <h6>Connect With Us</h6>
                  <div className="social-icons">
                    <a href="#!" className="social-btn facebook"><FaFacebookF /></a>
                    <a href="#!" className="social-btn instagram"><FaInstagram /></a>
                    <a href="#!" className="social-btn whatsapp"><FaWhatsapp /></a>
                    <a href="#!" className="social-btn youtube"><FaYoutube /></a>
                  </div>
                </div>

                {/* GOOGLE MAPS BUTTON */}
                <a
                  href="https://maps.google.com/?q=Gurazala,Andhra+Pradesh"
                  target="_blank"
                  rel="noreferrer"
                  className="maps-btn"
                >
                  <FaMapMarkerAlt />
                  View on Google Maps
                  <span className="maps-arrow">›</span>
                </a>
              </div>
            </div>

            {/* FORM SECTION */}
            <div className="col-lg-8" id="form">
              <div className="contact-form">
                <h3>Submit Your Grievance</h3>
                <p>Fill in the details below and our office will review your request.</p>

                <form>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" className="form-control" placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group">
                      <label>Mobile Number *</label>
                      <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="form-group">
                      <label>Voter ID *</label>
                      <input type="text" className="form-control" placeholder="Enter Voter ID" />
                    </div>
                    <div className="form-group">
                      <label>Village *</label>
                      <select className="form-select" id="village">
                        <option value="">Select Village</option>
                        <option value="Pinnelli">Pinnelli</option>
                        <option value="Vemavaram">Vemavaram</option>
                        <option value="Gangireddypalem">Gangireddypalem</option>
                        <option value="Morjampadu">Morjampadu</option>
                        <option value="Nagulavaram">Nagulavaram</option>
                        <option value="Srirukminipuram">Srirukminipuram</option>
                        <option value="Rentapalla">Rentapalla</option>
                        <option value="Chennayapalem">Chennayapalem</option>
                        <option value="Velpuru">Velpuru</option>
                        <option value="Piduguralla">Piduguralla</option>
                        <option value="Brahmanapalle">Brahmanapalle</option>
                        <option value="China Agraharam">China Agraharam</option>
                        <option value="Janapadu">Janapadu</option>
                        <option value="Tummalacheruvu">Tummalacheruvu</option>
                        <option value="Kamepalli">Kamepalli</option>
                        <option value="Pillutla">Pillutla</option>
                        <option value="Guthikonda">Guthikonda</option>
                        <option value="Dachepalli">Dachepalli</option>
                        <option value="Nadikudi">Nadikudi</option>
                        <option value="Tangeda">Tangeda</option>
                        <option value="Kesanapalli">Kesanapalli</option>
                        <option value="Madinapadu">Madinapadu</option>
                        <option value="Katragadda">Katragadda</option>
                        <option value="Ramapuram">Ramapuram</option>
                        <option value="Kothapalli">Kothapalli</option>
                        <option value="Pondugula">Pondugula</option>
                        <option value="Vedadri">Vedadri</option>
                        <option value="Cherlagudipadu">Cherlagudipadu</option>
                        <option value="Daida">Daida</option>
                        <option value="Gangavaram">Gangavaram</option>
                        <option value="Gogulapadu">Gogulapadu</option>
                        <option value="Gottimukkala">Gottimukkala</option>
                        <option value="Gurazala">Gurazala</option>
                        <option value="Madugula">Madugula</option>
                        <option value="Pallegunta">Pallegunta</option>
                        <option value="Pulipadu">Pulipadu</option>
                        <option value="Telukutla">Telukutla</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Mandal *</label>
                      <select className="form-select">
                        <option>Select Mandal</option>
                        <option value="guruzala">Gurazala</option>
                        <option value="dachepalli">Dachepalli</option>
                        <option value="piduguralla">Piduguralla</option>
                        <option value="machavaram">Machavaram</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Category *</label>
                      <select className="form-select">
                        <option>Select Category</option>
                        <option value="irrigation">Irrigation</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <label>Subject *</label>
                    <input type="text" className="form-control" placeholder="Enter Subject" />
                  </div>

                  <div className="form-group mt-3">
                    <label>Detailed Grievance *</label>
                    <textarea rows="5" className="form-control" placeholder="Type your grievance in detail..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary mt-4">
                    <FaPaperPlane style={{ marginRight: 8 }} />
                    Submit Grievance
                  </button>

                  <p className="privacy-note">
                    <FaLock style={{ marginRight: 6 }} />
                    Your information is safe with us. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP YOU SECTION */}
      <section className="help-section">
        <div className="container">
          <div className="section-title-center">
            <div className="section-divider">
              <span></span><h4>How Can We Help You?</h4><span></span>
            </div>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-lg-3 col-md-6">
              <div className="help-card">
                <div className="help-icon yellow">
                  <FaUsers />
                </div>
                <h5>Public Grievances</h5>
                <p>Submit your issues and get faster resolution.</p>
                <a href="#form" className="help-link yellow-link">Submit Now →</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="help-card">
                <div className="help-icon green">
                  <FaCircleCheck />
                </div>
                <h5>Welfare Schemes</h5>
                <p>Know about government welfare schemes and benefits.</p>
                <a href="#!" className="help-link green-link">Explore Schemes →</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="help-card">
                <div className="help-icon orange">
                  <FaLightbulb />
                </div>
                <h5>Development Suggestions</h5>
                <p>Share your ideas and suggestions for a better constituency.</p>
                <a href="#form" className="help-link orange-link">Share Now →</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="help-card">
                <div className="help-icon red">
                  <FaAmbulance />
                </div>
                <h5>Emergency Assistance</h5>
                <p>Need immediate help? Contact our helpline anytime.</p>
                <a href="tel:+919849355955" className="help-link red-link">Get Help Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="constitution-section">
        <div className="container">
          <div className="map-tag">OUR CONSTITUENCY</div>
          <h3 className="map-title">Gurazala — Our Pride</h3>
          <p className="map-subtitle">
            Serving the people of Gurazala Constituency with dedication and transparency.
          </p>
          <div className="map-wrapper">
            
            <iframe
              title="Gurazala Satellite View"
              src="https://maps.google.com/maps?q=Gurazala,Andhra%20Pradesh&t=k&z=13&output=embed"
              style={{ width: "100%", height: "450px", border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

