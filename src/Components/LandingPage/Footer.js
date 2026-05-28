import React from "react";
import "../../Styles/Footer.css";
import footercbn from "../../assests/cbngaru.png";
import footerlogo from "../../assests/tdp.jpg";
import { IoMdMail } from "react-icons/io";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-cont">
      <div className="footer-left">
        <img className="cbnpic" src={footercbn} alt="FooterPicture" />
        <img className="foot-logo" src={footerlogo} alt="FooterLogo" />
      </div>

      <div className="footer-icons">
        <a
          href="https://www.facebook.com/YarapathineniSrinu/?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook className="f-icon" />
        </a>

        <a
          href="https://x.com/Yarapathineni_S?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareTwitter className="f-icon" />
        </a>

        <a
          href="https://www.instagram.com/yarapathineni_srinivasarao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="f-icon" />
        </a>

        <a
          href="mailto:yarapathinenimla@gmail.com">
          <IoMdMail className="f-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
