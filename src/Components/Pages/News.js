import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/News.css";

import newsimg from "../../assests/others10.jpg";
import newsimg1 from "../../assests/others11.jpg";
import newsimg2 from "../../assests/people9.jpg";

function News() {

  const newsData = [
    {
      image: newsimg,
      month: "April 2026",
      title:
        "Yarapathineni Srinivasa Rao Addresses Public Meeting in Gurazala",
      desc:
        "MLA Yarapathineni Srinivasa Rao addressed a large public meeting in Gurazala.",
    },

    {
      image: newsimg1,
      month: "June 2025",
      title: "Development Projects Reviewed In Palnadu Region",

      desc:
        "A review meeting was held to assess the progress of various development projects.",
    },

    {
      image: newsimg2,
      month: "May 2025",
      title: "Standing Strong For Farmer's Right",

      desc:
        "Discussion held on farmers issues and solutions. Our commitment to protect and support farmers continues.",
    },
  ];

  return (
    <section className="news-page">

      <div className="news-container">

        {/* LEFT SIDEBAR */}

        <div className="news-sidebar">

          <div className="sidebar-box">

            <h4>News & Blogs</h4>

            <ul>

              <li className="active">All News</li>

              <li>Latest Updates</li>

              <li>Press Releases</li>

              <li>Speeches</li>

              <li>Events</li>

              <li>Gallery</li>

            </ul>

          </div>

          <div className="subscribe-box">

            <h5>Stay Connected</h5>

            <p>Subscribe to get latest updates.</p>

            <input type="email" placeholder="Enter your email"/>

            <button>Subscribe</button>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="news-content">

          <div className="news-header">

            <h2>All News</h2>

            <div className="header-right">

              <input type="text" placeholder="Search news..." />

              <select>

                <option>Latest First</option>

                <option>Oldest First</option>

              </select>

            </div>

          </div>

          {newsData.map((item, index) => (

            <div className="news-card" key={index}>

              <img src={item.image} alt="" />

              <div className="news-details">

                <span>{item.month}</span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <Link to="/article" className="read-more">

                  Read More →

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default News;