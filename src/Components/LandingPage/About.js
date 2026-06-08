import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaFlag,
  FaBuilding,
  FaChartLine,
  FaUsers,
  FaRoad,
  FaUserGraduate,
  FaHeartbeat,
} from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import banner2img from "../../assests/banner2.png";
import aboutimg from "../../assests/about.png";
import facebookimg from "../../assests/facebook.png";
import instaimg from "../../assests/instagram.png";
import ximg from "../../assests/twitter.png";
import cbnimg from "../../assests/leaders1.jpg";
import newsimg from "../../assests/others10.jpg";
import mediahighlightsimg from "../../assests/mediahighlights.png";
import "../../Styles/About.css";

function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div class="container-fluid  p-0">
        <div className="row">
          <div className="col-lg-12 col-md-12 about-image">
            <img src={banner2img} alt="About Us" className="img-fluid w-100" />

            <div className="banner-buttons">
              <button className="btn btn-warning">Know His Journey</button>
              <button className="btn btn-dark ms-2">Watch Video</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="journey-img">
            <img
              src={aboutimg}
              alt="35 Years of Public Service"
              className="img-fluid"/>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="journey-content">
            <span className="sub-title">A JOURNEY OF DEDICATION</span>

            <h2>From Grassroots to Greatness</h2>

            <p>
              From a young party worker in the late 1980's to one of the most
              Respected Leaders in Andhra Pradesh, Sri Yarapathineni Srinivasa
              Rao's journey is a testament to resilience, Loyality and
              unwavering commitment to People
            </p>
            <div className="journey-icons">
              <div className="icon-item">
                <span className="icon">
                  <FaUser />
                </span>
                <h5>1980's</h5>
                <p>Glassroot's Beginnings</p>
              </div>
              <div className="icon-item">
                <span className="icon">
                  <FaFlag />
                </span>
                <h5>1990's</h5>
                <p>Rise In Politics</p>
              </div>
              <div className="icon-item">
                <span className="icon">
                  <FaBuilding />
                </span>
                <h5>2000's</h5>
                <p>Strengthening Palnadu</p>
              </div>
              <div className="icon-item">
                <span className="icon">
                  <FaChartLine />
                </span>
                <h5>2010's</h5>
                <p>Development Leadership</p>
              </div>
              <div className="icon-item">
                <span className="icon">
                  <FaUsers />
                </span>
                <h5>2020's</h5>
                <p>Vision For The Future</p>
              </div>
            </div>
          </div>
        </div>

        <div className="achievements-section py-4">
          <div className="text-center">
            <span className="sub-title">COMMITTED TO PALNADU</span>
            <h2 className="achehead">Achievements & Contributions</h2>
          </div>

          <div className="row ache-row">
           <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <IoWaterOutline className="ache-icons" />
              <h5>Water & Irrigation</h5>
              <p>
                Championing projects that brought water, hope and prosperity to
                farmers.
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <FaRoad className="ache-icons" />
              <h5>Infrastructure</h5>
              <p>
                Building roads, bridges and connectivity for a stronger Palnadu.
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <FaUserGraduate className="ache-icons" />
              <h5>Education</h5>
              <p>
                Promoting quality education and creating opportunities for
                youth.
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <FaHeartbeat className="ache-icons" />
              <h5>Healthcare</h5>
              <p>
                Improving healthcare facilities and ensuring better lives for
                all.
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <FaPeopleGroup className="ache-icons" />
              <h5>Social Welfare</h5>
              <p>Supporting the marginalized and empowering communities.</p>
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center achievement-item">
              <BsGraphUpArrow className="ache-icons" />
              <h5>Economic Growth</h5>
              <p>Encouraging industries, jobs and sustainable development.</p>
            </div>
          </div>
        </div>

        <div className="news-gallery-section py-5">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="text-warning">PHOTO GALLERY</h6>
              <h3>Moments of Leadership</h3>

              <button onClick={()=> navigate("/photos")} className="btn btn-danger mb-3">View Gallery</button>

              <div className="gallery-grid">
                <img src={cbnimg} alt="" />
                <img src={cbnimg} alt="" />
                <img src={cbnimg} alt="" />
                <img src={cbnimg} alt="" />
              </div>
            </div>

            <div className="col-lg-4">
              <h6 className="text-warning">LATEST NEWS</h6>
              <h3>Stay Updated</h3>

              <div className="news-item">
                <img src={newsimg} alt="" />
                <div className="news-item-content">
                <h6>April 2026</h6>
                  <p>Yarapathineni Srinivasa Rao Addresses Public Meeting in Gurazala</p>
                 <Link className="read-more" to="/article">Read More →</Link>
                </div>
              </div>

              <div className="news-item">
                <img src={newsimg} alt="" />
                <div className="news-item-content">
                <h6>June 2025</h6>
                  <p>Development Projects Reviewed In Palnadu Region</p>
                 <Link className="read-more" to="/article">Read More →</Link>
                </div>
              </div>

                <div className="news-item">
                <img src={newsimg} alt="" />
                <div className="news-item-content">
                <h6>May 2025</h6>
                  <p>Standing Strong For Farmer's Right</p>
                  <Link className="read-more" to="/article">Read More →</Link>
                </div>
              </div>

              <button className="btn btn-outline-danger mt-3 w-100">
                View All News
              </button>
            </div>

            <div className="col-lg-4">
              <h6 className="text-warning">MEDIA HIGHLIGHTS</h6>
              <h3>In the News</h3>

              <img
                src={mediahighlightsimg}
                alt="About img"
                className="img-fluid media-banner"
              />
              <div className="media-grid">
                <a href="https://www.facebook.com/YarapathineniSrinu/" target="_blank" rel="noopener noreferrer">
                  <img src={facebookimg} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/yarapathineni_srinivasarao/" target="_blank" rel="noopener noreferrer">
                  <img src={instaimg} alt="Instagram" />
                </a>
                <a href="https://x.com/Yarapathineni_S" target="_blank" rel="noopener noreferrer">
                  <img src={ximg} alt="Twitter" />
                </a>
              </div>

              <button onClick={()=> navigate("/videos")} className="btn btn-outline-danger mt-3 w-100">
                View Media
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
