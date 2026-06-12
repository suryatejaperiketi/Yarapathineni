import React, { useState, useEffect, useRef } from "react";
import "../../Styles/Journey.css";
import img1970 from "../../assests/srntr.png";
import img1980 from "../../assests/1980's.png";
import img1990 from "../../assests/1990's.png";
import img2000 from "../../assests/2000's.png";
import img2010 from "../../assests/leaders1.jpg";
import img2020 from "../../assests/allpics.png";
import journeymg from "../../assests/banner1.png";


const timelineData = [
  {
    decade: "1970s",
    label: "EARLY YEARS",
    image: img1970,
    title: "Grassroots beginnings",
    color: "#c8a96e",
    description:
      "A young, driven individual joins the party with conviction and purpose. He builds strong connections with people, understands their struggles, and dedicates himself to grassroots outreach and party work. His loyalty to the party remains unwavering",
  },
  {
    decade: "1980s",
    label: "RISE",
    image: img1980,
    title: "Organizational strength & discipline",
    color: "#b5956a",
    description:"Known as a disciplined and dependable party worker, he strengthens the party's organization through loyalty, persistence, and dedication, earning the trust of leaders and cadres alike. One party. Always"
  },
  {
    decade: "1990s",
    label: "INFLUENCE",
    image: img1990,
    title: "Rise in political influence",
    color: "#a07d55",
    description:
      "His public service and party contributions earn him greater responsibilities. Bridging party leadership and the people, he helps drive community-focused development in Palnadu while remaining committed to the same party and vision",
  },
  {
    decade: "2000s",
    label: "ADVOCACY",
    image: img2000,
    title: "Advocacy for development & welfare",
    color: "#8a6840",
    description:
      "With two decades of service, he advocates for public welfare, regional development, and community empowerment across Andhra Pradesh. A symbol of stability within the party, his principles remain unchanged",
  },
  {
    decade: "2010s",
    label: "LEADERSHIP",
    image: img2010,
    title: "Leadership & regional presence",
    color: "#755430",
    description:
      "A key force in strengthening the party, he mentors young leaders and workers. His unwavering loyalty through political changes sets him apart as a rare constant in Andhra Pradesh politics.",
  },
  {
    decade: "2020s",
    label: "PRESENT",
    image: img2020,
    title: "Vision for the future",
    color: "#5e4025",
    description:
      "Yarapathineni Srinivasa Rao continues to inspire cadres and constituents through his integrity, perseverance, and dedication. A pillar of the party's strength in Palnadu and beyond. 46+ years. One party. One vision.",
  },
];

function TimelineItem({ item, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? "visible" : ""}`}
      style={{ "--accent": item.color }}
    >
      <div className="decade-col">
        <span className="decade-number">{item.decade}</span>
        <span className="decade-label">{item.label}</span>
      </div>

      <div className="spine-col">
        <div className="spine-line top" />
        <div className="spine-dot">
          <div className="dot-inner" />
        </div>
        <div className="spine-line bottom" />
      </div>

      <div className="content-col">
        <div className="content-wrapper">
          <div className="timeline-image">
            <img src={item.image} alt={item.decade} />
          </div>

          <div className="content-text">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-desc">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Journey() {
  return (
    <>
      <section className="journey-sec">
      <h1 className="section-tag-jr">JOURNEY</h1>
        <div className="col-lg-12 col-md-12 about-image">
          <img src={journeymg} alt="About Us" className="img-fluid w-100" />
        </div>
      </section>

      <section className="journey-wrapper">
        <div className="journey-container">
          <div className="journey-header">
            <p className="header-eyebrow">DECADE BY DECADE</p>
            <h1 className="header-title">The Journey Unfolds</h1>
            <div className="header-rule" />
          </div>

          <div className="timeline">
            {timelineData.map((item, i) => (
              <TimelineItem key={item.decade} item={item} index={i} />
            ))}
          </div>

          <div className="journey-footer">
            <span>46+ Years · One Party · One Vision</span>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Journey;
