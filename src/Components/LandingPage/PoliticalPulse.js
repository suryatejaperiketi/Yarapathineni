import React from "react";

import "../../Styles/PoliticalPulse.css";


import {
  FaBullhorn,
  FaUsers,
  FaHeartbeat,
  FaBriefcase,
  FaClipboardList,
  FaMapMarkerAlt,
  FaUsersCog,
  FaCalendarAlt,
  FaCheckCircle,
  FaHome,
 FaPersonBooth,

} from "react-icons/fa";

function PoliticalPulse() {
  return (
    <section className="politicalPulse">

      {/* HEADER */}

      <div className="pulseTitle">

        <h1>
          Political <span>Pulse</span>
        </h1>

        <p>
          Connecting Leadership With People's Progress
        </p>

      </div>

      {/* HERO */}

      <div className="heroSection">

        {/* LEFT */}

        <div className="leftSide">

          <div className="leaderGlow"></div>



          <div className="leaderName">

            <h3>
              Yarapathineni Srinivasa Rao Garu
            </h3>

            <p>
              Dedicated To People. Driven By Development.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="cardsGrid">

          <div className="card">

            <div className="icon">
              <FaBullhorn />
            </div>

            <h3>Press Releases</h3>

            <ul>

              <li>Latest announcements</li>

              <li>Government initiatives</li>

              <li>Public welfare programs</li>

            </ul>

          </div>

          <div className="card">

            <div className="icon">
              <FaUsers />
            </div>

            <h3>Events & Activities</h3>

            <ul>

              <li>Public meetings</li>

              <li>Village visits</li>

              <li>Community events</li>

            </ul>

          </div>

          <div className="card">

            <div className="icon">
              <FaHeartbeat />
            </div>

            <h3>Healthcare</h3>

            <ul>

              <li>Hospital development</li>

              <li>Medical camps</li>

              <li>Health support programs</li>

            </ul>

          </div>

          <div className="card">

            <div className="icon">
              <FaBriefcase />
            </div>

            <h3>Employment</h3>

            <ul>

              <li>Youth employment</li>

              <li>Skill development</li>

              <li>Infrastructure projects</li>

            </ul>

          </div>

          <div className="card">

            <div className="icon">
              <FaClipboardList />
            </div>

            <h3>Public Reviews</h3>

            <ul>

              <li>Issue tracking</li>

              <li>Development monitoring</li>

              <li>Grievance redressal</li>

            </ul>

          </div>

          <div className="card">

            <div className="icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Constituency Coverage</h3>

            <p>120+ Villages</p>

            <p>4 Mandals</p>

          </div>

        </div>

      </div>

      {/* BLUE BAR */}

      <div className="statsBar">

        <div className="stat">

          <FaUsersCog />

          <h2>2.68L+</h2>

          <p>People Connected</p>

        </div>

        <div className="stat">

          <FaHome />

          <h2>120+</h2>

          <p>Villages Covered</p>

        </div>

        <div className="stat">

          <FaCheckCircle />

          <h2>1000+</h2>

          <p>Issues Followed</p>

        </div>

        <div className="stat">

          <FaCalendarAlt />

          <h2>300+</h2>

          <p>Events Conducted</p>

        </div>
          <div className="stat">

          <FaPersonBooth />

          <h2>300+</h2>

          <p>Polling Booths</p>

        </div>

      </div>

    </section>
  );
}

export default PoliticalPulse;