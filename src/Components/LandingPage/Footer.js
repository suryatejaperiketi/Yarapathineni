import React from "react";
import "../../Styles/Footer.css";
import footerlogo from "../../assests/logo2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-col">
            <img src={footerlogo} alt="logo" className="footer-logo" />

            <h4>తెలుగు దేశం</h4>

            <p>
              46+ Years of Dedication, Development and Service to the People of
              Palnadu
            </p>

            <div className="social-icons-foot">
              <a
                href="https://www.facebook.com/YarapathineniSrinu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/Yarapathineni_S"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/yarapathineni_srinivasarao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="quick-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/news">News</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/photos">Media</a>
              </li>

              <li>
                <a href="/journey">Journey</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>

              <li>
                <a href="/development">Achievements</a>
              </li>

              <li>
                <a href="/photos">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Info</h4>

            <p>
              <FaMapMarkerAlt className="foot-icons" /> Gurazala, Palnadu
              District
            </p>

            <p>
              <FaPhoneAlt className="foot-icons" />

              <a href="tel:+919849355955" className="email-link">
                +91 9849355955
              </a>
            </p>

            <p>
              <FaEnvelope className="foot-icons" />

              <a
                href="mailto:yarapathinenimla@gmail.com"
                className="email-link"
              >
                yarapathinenimla@gmail.com
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Newsletter</h4>

            <p>Subscribe to get latest updates.</p>

            <div className="newsletter">
              <input type="email" placeholder="Enter Your Email" />

              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved.</p>

          <p>Designed with ❤️ for Palnadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
