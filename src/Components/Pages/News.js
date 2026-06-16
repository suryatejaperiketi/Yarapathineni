import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../Styles/News.css";

import { newsData } from "../../data/newsData";

function News() {
  const [search, setSearch] = useState("");

  const [sortOrder, setSortOrder] = useState("latest");

  const filteredNews = [...newsData]

    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()),
    )

    .sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      }

      return new Date(a.date) - new Date(b.date);
    });

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

              <li>
                <Link to="/photos" className="menu-link">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="subscribe-box">
            <h5>Stay Connected</h5>

            <p>Subscribe to get latest updates.</p>

            <input type="email" placeholder="Enter your email" />

            <button>Subscribe</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}

        <div className="news-content">
          <div className="news-header">
            <div className="headingg">
              <h2>All News</h2>
              <p>Stay Updated with Latest News, Updates, and Announcements</p>
            </div>
            <div className="header-right">
              {/* Search */}

              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Sort */}

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="latest">Latest First</option>

                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* News List */}

          {filteredNews.length === 0 ? (
            <p>No news found.</p>
          ) : (
            filteredNews.map((item) => (
              <div className="news-card" key={item.slug}>
                <img src={item.image} alt={item.title} />

                <div className="news-details">
                  <span>{item.month}</span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <Link to={`/news/${item.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default News;
