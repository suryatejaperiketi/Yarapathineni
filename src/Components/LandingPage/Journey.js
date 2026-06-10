import React, { useState, useEffect, useRef } from "react";
import "../../Styles/Journey.css";
import img1970 from "../../assests/srntr.png";
import img1980 from "../../assests/1980's.png";
import img1990 from "../../assests/1990's.png";
import img2000 from "../../assests/2000's.png";
import img2010 from "../../assests/leaders1.jpg";
import img2020 from "../../assests/allpics.jpg";
import journeymg from "../../assests/banner1.png";

const timelineData = [
  {
    decade: "1970s",
    label: "EARLY YEARS",
    image: img1970,
    title: "Grassroots beginnings",
    color: "#c8a96e",
    description:
      "A young, driven individual joins the party with conviction and purpose. From the ground up, he begins building relationships with common people, understanding their struggles, and channeling that energy into grassroots outreach and party work. His loyalty to the party begins here — and never wavers.",
  },
  {
    decade: "1980s",
    label: "RISE",
    image: img1980,
    title: "Organizational strength & discipline",
    color: "#b5956a",
    description:
      "Earning a reputation as a disciplined and dependable party worker, he actively contributes to strengthening the party's organizational framework. His loyalty, persistence, and dedication earn the trust of both senior leadership and fellow cadres. One party. Always.",
  },
  {
    decade: "1990s",
    label: "INFLUENCE",
    image: img1990,
    title: "Rise in political influence",
    color: "#a07d55",
    description:
      "Consistent public service and party contributions elevate his standing. He takes on larger responsibilities, serves as a bridge between party leadership and the people, and begins shaping community-focused development initiatives in Palnadu — still committed to the same party and vision.",
  },
  {
    decade: "2000s",
    label: "ADVOCACY",
    image: img2000,
    title: "Advocacy for development & welfare",
    color: "#8a6840",
    description:
      "With two decades of service behind him, he champions people-first initiatives advocating for public welfare, regional development, and community empowerment across Andhra Pradesh. His voice becomes a symbol of stability within the party. His ideological principles remain unchanged.",
  },
  {
    decade: "2010s",
    label: "LEADERSHIP",
    image: img2010,
    title: "Leadership & regional presence",
    color: "#755430",
    description:
      "Playing a pivotal role in strengthening the party at local and national levels, he mentors younger leaders and party workers. His unwavering loyalty across political upheavals and changes sets him apart as a rare constant in Andhra Pradesh politics.",
  },
  {
    decade: "2020s",
    label: "PRESENT",
    image: img2020,
    title: "Vision for the future",
    color: "#5e4025",
    description:
      "Still active and still committed — Yarapathineni Srinivasa Rao continues to inspire cadres and constituents alike. A living example of integrity, perseverance, and selfless dedication, he remains a cornerstone of the party's strength in Palnadu and beyond. 46+ years. One party. One vision.",
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
