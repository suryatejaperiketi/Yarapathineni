import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import "../../Styles/ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="section-tag-contact">Contact</div>
      <div className="container">
        <h2>Reach Out MLA Garu</h2>

        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
              Sri Yarapathineni Srinivasa Rao welcomes every citizen of
              Gurazala. Visit our constituency office or submit your grievance
              online — your voice will be heard and acted upon promptly.
            </p>
            <div className="contact-info">
              <div className="contact-content">
                <div className="contact-icon">
                  <FaLocationDot />
                </div>
                <div className="contact-text">
                  <h6>Constituency Office</h6>
                  <h5>
                   D. No. 7-323, Behind Dr. Anjireddy Complex, Piduguralla Mandal, Palnadu District, AP, Pin-522413.
                  </h5>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <IoCallOutline />
                </div>
                <div className="contact-text">
                  <h6>Phone / WhatsApp</h6>
                  <h5>+91 9849355955/+91 7995944299 </h5>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <MdOutlineEmail />
                </div>
                <div className="contact-text">
                  <h6>Email</h6>
                  <h5>support@yarapathinenisrinivasarao.com</h5>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <FaRegBuilding />
                </div>
                <div className="contact-text">
                  <h6>AP Legislature Office</h6>
                  <h5>
                     Andhra Pradesh LegislatureInterim Complex, Block No. 6,Velagapudi, Amaravati,Guntur District, Andhra Pradesh - 5222
                  </h5>
                </div>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <IoMdTime />
                </div>
                <div className="contact-text">
                  <h6>Office Hours</h6>
                  <h5>Mon – Sat: 10:00 AM – 5:00 PM | <span style={{color:"#ff6004"}}>Sunday: Closed</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="contact-form mb-3">
              <h3>Submit Your Grievance</h3>
              <p>All fields marked * are required</p>
              <form >
                <div className="form-grid">
                  <div className="form-group">
                    <label>Name<span className="contact-span-req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Voter-ID<span className="contact-span-req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="voter-id"
                      placeholder="Enter your voter-id"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Mandal<span className="contact-span-req">*</span></label>
                    <select className="form-select" id="mandal">
                      <option value="">Select Your Mandal</option>
                      <option value="guruzala">Gurazala</option>
                      <option value="dachepalli">Dachepalli</option>
                      <option value="piduguralla">Piduguralla</option>
                      <option value="machavaram">Machavaram</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Category<span className="contact-span-req">*</span></label>
                    <select className="form-select" id="category">
                      <option value="">Select a category</option>
                      <option value="irrigation">Irrigation</option>
                      <option value="education">Education</option>
                      <option value="health">Health</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                   <div className="form-group">
                    <label>Village<span className="contact-span-req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Enter village name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number<span className="contact-span-req">*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter your number"
                      required
                    />
                  </div>
                 
                </div>

                <br />
                <div className="form-group">
                  <label>Message<span className="contact-span-req">*</span></label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
