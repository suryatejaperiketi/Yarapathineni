import React from "react";
import "../../Styles/SpiritualInitiatives.css";
import { MdTempleHindu } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaCalendarDays,
  FaBowlFood,
  FaOm,
  FaHandsPraying,
} from "react-icons/fa6";
import Kalyanamahotsavamimg from "../../assests/Kalyanamahotsavam.png";
import gallery1 from "../../assests/allpics.jpg";
import kmvimg1 from "../../assests/kalyanamohotsavamimg1.jpg";
import kmvimg2 from "../../assests/kalyanamohotsavamimg2.jpg";
import kmvimg3 from "../../assests/kalyanamohotsavamimg3.jpg";
import kmvimg4 from "../../assests/kalyanamohotsavamimg4.jpg";

function SpiritualInitiatives() {
  return (
    <>
      <section className="spiritual-section">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="spiritual-content">
                <span className="spiritual-subtitle">Sri</span>
                <h2 className="spiritual-title">
                  Srinivasa
                  <span>Kalyana Mahotsavam</span>
                </h2>
                <p className="spiritual-desc">
                  Under the leadership of{" "}
                  <strong>Yarapathineni Srinivasa Rao Garu</strong>, and with
                  the support of TTD, the sacred Sri Srinivasa Kalyana
                  Mahotsavam was organized in Piduguralla for the spiritual
                  welfare and prosperity of the people.
                </p>

                <p className="spiritual-desc">
                  Thousands of devotees gathered to receive the blessings of
                  Lord Venkateswara Swamy and take part in this grand spiritual
                  celebration.
                </p>
                <div className="spiritual-buttons">
                  <button className="event-btn">About The Event</button>

                  <button className="video-btn">Watch Video</button>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <img
                src={Kalyanamahotsavamimg}
                alt="Sri Srinivasa Kalyana Mahotsavam"
                className="spiritual-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section p-3 mb-2">
        <div className="highlights-grid">
          <div className="highlights-card">
            <div className="highlights-icon">
              <MdTempleHindu />
            </div>
            <div className="highlights-content">
              <h6>Support With</h6>
              <h6>TTD & Yarapathineni Srinivasa Rao Garu</h6>
            </div>
          </div>

          <div className="highlights-card">
            <div className="highlights-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="highlights-content">
              <h6>Venue</h6>
              <h5>Piduguralla</h5>
            </div>
          </div>

          <div className="highlights-card">
            <div className="highlights-icon">
              <FaCalendarDays />
            </div>
            <div className="highlights-content">
              <h6>Event</h6>
              <h5>Sri Srinivasa Kalyana Mahotsavam</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 vision-div">
              <h6 className="section-tag">OUR VISION</h6>
              <h2>A Divine Celebration for Peace & Prosperity</h2>

              <p>
                This sacred event is dedicated to the well-being of the people,
                farmers, youth, and families of our region.
              </p>

              <ul className="vision-list">
                <li>Seeking blessings for peace and harmony</li>
                <li>Praying for good rains and prosperity</li>
                <li>Strengthening devotion and culture</li>
                <li>Uniting thousands in faith and service</li>
              </ul>
            </div>

            <div className="col-lg-7 event-highlights">
              <h5 className="event-highlights-head">EVENT HIGHLIGHTS</h5>
              <div className="event-highlights-grid">
                <div className="event-highlight-card">
                  <div className="event-highlights-icon">
                    <MdTempleHindu />
                  </div>
                  <h6>Sri Srinivasa Kalyanam</h6>
                  <p>
                    The divine celestial marriage of Lord Venkateswara Swamy.
                  </p>
                </div>

                <div className="event-highlight-card">
                  <div className="event-highlights-icon">
                    <FaOm />
                  </div>
                  <h6>Vedic Rituals</h6>
                  <p>
                    Traditional Vedic chants and rituals performed by scholars.
                  </p>
                </div>

                <div className="event-highlight-card">
                  <div className="event-highlights-icon">
                    <FaHandsPraying />
                  </div>
                  <h6>Devotional Programs</h6>
                  <p>
                    Bhajans, cultural performances and spiritual discourses.
                  </p>
                </div>

                <div className="event-highlight-card">
                  <div className="event-highlights-icon">
                    <FaBowlFood />
                  </div>
                  <h6>Annadanam</h6>
                  <p>Thousands of devotees served with free meals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container text-center">
          <h6 className="section-tag">PHOTO GALLERY</h6>
          <h2>Moments of Devotion</h2>

          <div className="row g-3 mt-4">
            <div className="col-lg-3 col-md-6">
              <img src={kmvimg1} alt="" className="gallery-img" />
            </div>

            <div className="col-lg-3 col-md-6">
              <img src={kmvimg2} alt="" className="gallery-img" />
            </div>

            <div className="col-lg-3 col-md-6">
              <img src={kmvimg3} alt="" className="gallery-img" />
            </div>

            <div className="col-lg-3 col-md-6">
              <img src={kmvimg4} alt="" className="gallery-img" />
            </div>
            
          </div>

          <button className="gallery-btn mt-4 mb-4">View Full Gallery</button>
        </div>
        
      </section>

      <section className="leader-section">
  <div className="container">
    <div className="leader-card">
      <div className="row align-items-center g-0">

        {/* Image */}
        <div className="col-lg-3">
          <div className="leader-image-wrapper">
            <img src={gallery1} alt="" className="leader-img" />
          </div>
        </div>

        {/* Content */}
        <div className="col-lg-6">
          <div className="leader-content">
            <h5>From the Leader</h5>

            <div className="quote-icon">❝</div>

            <p className="leader-quote">
              It is our privilege to organize this divine event in
              association with TTD for the blessings of Lord
              Venkateswara Swamy. May His grace bring happiness,
              good health and prosperity to every family in our region.
            </p>

            <h6>Yarapathineni Srinivasa Rao Garu</h6>

            <span>
              MLA, Serving the People
            </span>
          </div>
        </div>

        {/* Points */}
        <div className="col-lg-3">
          <div className="leader-points">
            <div className="point">
              <span>🙏</span>
              <p>Thousands of Devotees</p>
            </div>

            <div className="point">
              <span>✨</span>
              <p>Divine Blessings</p>
            </div>

            <div className="point">
              <span>🕊️</span>
              <p>Peace, Prosperity & Well-being</p>
            </div>
          </div>
        </div>

      </div>

      <div className="leader-footer">
        Let us continue to walk together in devotion and service.
        <br/>
        <span> Govinda! Govinda!</span>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default SpiritualInitiatives;
