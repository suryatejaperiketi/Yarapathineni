import React from "react";
import "../../Styles/SpiritualInitiatives.css";
import { MdTempleHindu } from "react-icons/md";
import { FaMapMarkerAlt, FaChurch, FaMosque } from "react-icons/fa";
import {
  FaCalendarDays,
  FaBowlFood,
  FaOm,
  FaHandsPraying,
} from "react-icons/fa6";

import Kalyanamahotsavamimg from "../../assests/Kalyanamahotsavam.png";
import spiritualnote1 from "../../assests/ttdnote.png";
import spiritualnote2 from "../../assests/christiannote.png";
import spiritualnote3 from "../../assests/muslimnote.png";
import kmvimg1 from "../../assests/kalyanamohotsavamimg1.jpg";
import kmvimg2 from "../../assests/kalyanamohotsavamimg2.jpg";
import kmvimg3 from "../../assests/kalyanamohotsavamimg3.jpg";
import kmvimg4 from "../../assests/kalyanamohotsavamimg4.jpg";
import muslimimg from "../../assests/muslimbg.png";
import christianimg from "../../assests/christianbg.png";
import christianimg1 from "../../assests/christmascel.jpg";
import christianimg2 from "../../assests/christmascel1.jpg";
import christianimg3 from "../../assests/christmascel2.jpg";
import christianimg4 from "../../assests/christmascel3.jpg";
import muslimimg1 from "../../assests/muslims.jpg";
import muslimimg2 from "../../assests/muslims1.jpg";
import muslimimg3 from "../../assests/muslims2.jpg";
import muslimimg4 from "../../assests/muslims3.jpg";

const spiritualEvents = [
  {
    id: 1,
    subtitle: "Sri",
    titleMain: "Srinivasa",
    titleSpan: "Kalyana Mahotsavam",
    image: Kalyanamahotsavamimg,
    galleryImages: [kmvimg1, kmvimg2, kmvimg3, kmvimg4],
    leaderImage: spiritualnote1,
    supportWith: "TTD & Yarapathineni Srinivasa Rao Garu",
    supportIcon: <MdTempleHindu />,
    venue: "Piduguralla",
    event: "Sri Srinivasa Kalyana Mahotsavam",
    description1: (
      <>
        Under the leadership of{" "}
        <strong>Yarapathineni Srinivasa Rao Garu</strong>, and with the support
        of TTD, the sacred Sri Srinivasa Kalyana Mahotsavam was organized in
        Piduguralla for the spiritual welfare and prosperity of the people.
      </>
    ),
    description2:
      "Thousands of devotees gathered to receive the blessings of Lord Venkateswara Swamy and take part in this grand spiritual celebration.",
    highlights: [
      {
        icon: <MdTempleHindu />,
        title: "Sri Srinivasa Kalyanam",
        desc: "The divine celestial marriage of Lord Venkateswara Swamy.",
      },
      {
        icon: <FaOm />,
        title: "Vedic Rituals",
        desc: "Traditional Vedic chants and rituals performed by scholars.",
      },
      {
        icon: <FaHandsPraying />,
        title: "Devotional Programs",
        desc: "Bhajans, cultural performances and spiritual discourses.",
      },
      {
        icon: <FaBowlFood />,
        title: "Annadanam",
        desc: "Thousands of devotees served with free meals.",
      },
    ],
    leaderQuote:
      "It is our privilege to organize this divine event in association with TTD for the blessings of Lord Venkateswara Swamy. May His grace bring happiness, good health and prosperity to every family in our region.",
    footerText: "Let us continue to walk together in devotion and service.",
    footerAccent: "Govinda! Govinda!",
  },
  {
    id: 2,

    titleMain: "Merry",
    titleSpan: "Christmas Celebration",
    image: christianimg,
    galleryImages: [christianimg1, christianimg2, christianimg3, christianimg4],
    leaderImage: spiritualnote2,
    supportWith: "Yarapathineni Srinivasa Rao Garu",
    supportIcon: <FaChurch />,
    venue: "Gangavaram",
    event: "Christmas Celebrations",
    description1: (
      <>
        Under the leadership of{" "}
        <strong>Yarapathineni Srinivasa Rao Garu</strong> the joyous Christmas
        celebration was organized to spread the message of peace, love, hope,
        and unity among the people. The event brought together families, youth,
        and community members to celebrate the birth of Lord Jesus Christ
        through prayers, worship and festive gatherings.
      </>
    ),
    description2:
      "Thousands of devotees and Christian families gathered to receive God's blessings and participate in the grand Christmas celebrations, fostering harmony, compassion, and good will throughout the community.",
    highlights: [
      {
        icon: <FaChurch />,
        title: "Christmas Celebrations",
        desc: "The divine Birthday of Jesus Christ.",
      },
      {
        icon: <FaHandsPraying />,
        title: "Devotional Programs",
        desc: "Bhajans, cultural performances and spiritual discourses.",
      },
      {
        icon: <FaBowlFood />,
        title: "Annadanam",
        desc: "Thousands of devotees served with free meals.",
      },
    ],
    leaderQuote:
      "It is our joy to celebrate Christmas together as one community. May the message of love, peace, and hope of Lord Jesus Christ fill every heart and home in our region.",
    footerText: "May peace and joy of Christmas be with every family.",
    footerAccent: "Merry Christmas!",
  },
  {
    id: 3,
    subtitle: "Blessed",
    titleMain: "Blessed",
    titleSpan: "Eid Mubarak Celebrations",
    image: muslimimg,
    galleryImages: [muslimimg1, muslimimg2, muslimimg3, muslimimg4],
    leaderImage: spiritualnote3,
    supportWith: "Yarapathineni Srinivasa Rao Garu",
    supportIcon: <FaMosque />,
    venue: "Piduguralla",
    event: "Eid Mubarak Celebrations",
    description1: (
      <>
        Under the leadership <strong>Yarapathineni Srinivasa Rao Garu</strong>,
        the grand Eid celebrations were organized to promote the values of
        peace, unity, compassion, and brotherhood among the people.
      </>
    ),
    description2:
      "The occasion brought together families, community leaders, and well-wishers to celebrate the spirit of Eid through prayers, fellowship, charity, and festive gatherings. Eid is widely celebrated as a time of gratitude, generosity, and togetherness.",
    highlights: [
      {
        icon: <FaMosque />,
        title: "Eid Celebrations",
        desc: "Grand Eid gathering promoting peace, unity, and brotherhood.",
      },
      {
        icon: <FaHandsPraying />,
        title: "Prayers & Fellowship",
        desc: "Community prayers and festive gatherings.",
      },
      {
        icon: <FaBowlFood />,
        title: "Charity & Meals",
        desc: "Thousands served with food and charitable giving.",
      },
    ],
    leaderQuote:
      "Eid is a reminder of our shared values of compassion, generosity, and brotherhood. It is our honour to celebrate this occasion alongside our Muslim brothers and sisters for the well-being of all.",
    footerText: "Let us stand united in faith, love, and service.",
    footerAccent: "Eid Mubarak!",
  },
];

function SpiritualInitiatives() {
  return (
    <>
      {spiritualEvents.map((event) => (
        <React.Fragment key={event.id}>
          {/* ── Hero Section ── */}
          <section className="spiritual-section">
            <div className="container-fluid p-0">
              <div className="row g-0 align-items-center">
                <div className="col-lg-5 col-md-6">
                  <div className="spiritual-content">
                    <span className="spiritual-subtitle">{event.subtitle}</span>
                    <h2 className="spiritual-title">
                      {event.titleMain}
                      <span>{event.titleSpan}</span>
                    </h2>
                    <p className="spiritual-desc">{event.description1}</p>
                    <p className="spiritual-desc">{event.description2}</p>
                    <div className="spiritual-buttons">
                      <button className="event-btn">About The Event</button>
                      <button className="video-btn">Watch Video</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <img
                    src={event.image}
                    alt={event.event}
                    className="spiritual-img"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Highlights Bar ── */}
          <section className="highlights-section p-3 mb-2">
            <div className="highlights-grid">
              <div className="highlights-card">
                <div className="highlights-icon">{event.supportIcon}</div>
                <div className="highlights-content">
                  <h6>Support With</h6>
                  <h6>{event.supportWith}</h6>
                </div>
              </div>
              <div className="highlights-card">
                <div className="highlights-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="highlights-content">
                  <h6>Venue</h6>
                  <h5>{event.venue}</h5>
                </div>
              </div>
              <div className="highlights-card">
                <div className="highlights-icon">
                  <FaCalendarDays />
                </div>
                <div className="highlights-content">
                  <h6>Event</h6>
                  <h5>{event.event}</h5>
                </div>
              </div>
            </div>
          </section>

          {/* ── Vision + Event Highlights ── */}
          <section className="vision-section mb-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 vision-div">
                  <h6 className="section-tag">OUR VISION</h6>
                  <h2>A Divine Celebration for Peace & Prosperity</h2>
                  <p>
                    This sacred event is dedicated to the well-being of the
                    people, farmers, youth, and families of our region.
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
                    {event.highlights.map((item, idx) => (
                      <div className="event-highlight-card" key={idx}>
                        <div className="event-highlights-icon">{item.icon}</div>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Gallery ── */}
          <section className="gallery-section">
            <div className="container text-center">
              <h6 className="section-tag">PHOTO GALLERY</h6>
              <h2>Moments of Devotion</h2>
              <button className="view-gallery-btn mt-4">
                View Full Gallery
              </button>
              <div className="row g-3 mt-2">
                {event.galleryImages?.length > 0 ? (
                  event.galleryImages.map((img, idx) => (
                    <div className="col-lg-3 col-md-6" key={idx}>
                      <img src={img} alt="" className="gallery-img" />
                    </div>
                  ))
                ) : (
                  <p>No gallery images available</p>
                )}
              </div>
            </div>
          </section>

          <section className="leader-section">
            <div className="container">
              <div className="leader-card">
                <div className="row align-items-center g-0">
                  <div className="col-lg-3">
                    <div className="leader-image-wrapper">
                      <img
                        src={event.leaderImage}
                        alt={event.event}
                        className="leader-img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="leader-content">
                      <h5>From the Leader</h5>
                      <div className="quote-icon">❝</div>
                      <p className="leader-quote">{event.leaderQuote}</p>
                      <h6>Yarapathineni Srinivasa Rao Garu</h6>
                      <span>MLA, Serving the People</span>
                    </div>
                  </div>
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
                  {event.footerText}
                  <br />
                  <span>{event.footerAccent}</span>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      ))}
    </>
  );
}

export default SpiritualInitiatives;
