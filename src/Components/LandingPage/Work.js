import { useEffect, useRef } from "react";
import "../../Styles/Work.css";
import development1img from "../../assests/ccroad1.png";
import development2img from "../../assests/ccroad2.png";
import development3img from "../../assests/ccroad3.png";
import development4img from "../../assests/ccroad5.png";
import development5img from "../../assests/ccroad6.png";
import development6img from "../../assests/Inagurations.jpg";
import development7img from "../../assests/Inagurations2.jpg";
import development8img from "../../assests/Inagurations3.jpg";


const stats = [
  { icon: "📍", val: "4", lbl: "Mandals\nConnected" },
  { icon: "🌾", val: "6", lbl: "Focus\nAreas" },
  { icon: "👥", val: "4L+", lbl: "People\nBenefited" },
  { icon: "🏥", val: "1", lbl: "Medical\nCollege" },
];

const mandals = ["Gurazala", "Dachepalli", "Piduguralla", "Machavaram"];

export default function DevelopmentWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("dw-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const els = sectionRef.current?.querySelectorAll(".dw-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="development-sec">
        <h1 className="develop-head">DEVELOPMENT</h1>
        <div className="container">
          <div className="development-card">
            <div className="row g-0 align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="development-img">
                  <img src={development1img} alt="" />
                  <img src={development2img} alt="" />
                  <img src={development3img} alt="" />
                  <img src={development4img} alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-body">
                  <ul>
                    <li>
                      The construction of CC roads in several areas of Ekalavya
                      Nagar in Kandukur town.
                    </li>
                    <li>Rs. 30 lakhs CC road construction in NTR Nagar.</li>
                    <li>458 farmers received new pattadar passbooks.</li>
                    <li>
                      Development works started in several wards of Kandukur
                      Municipality
                    </li>
                    <li>Around ₹1.91 crore NUDA funds utilized.</li>
                    <li>
                      CC roads constructed in divisions 3, 16, 20, 22, 24, 25,
                      26 and 30.
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>


          <div className="development-card mt-5">
            <div className="row g-0 align-items-center">
             <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-body">
                  <ul>
                    <li>
                      The construction of CC roads in several areas of Ekalavya
                      Nagar in Kandukur town.
                    </li>
                    <li>Rs. 30 lakhs CC road construction in NTR Nagar.</li>
                    <li>458 farmers received new pattadar passbooks.</li>
                    <li>
                      Development works started in several wards of Kandukur
                      Municipality
                    </li>
                    <li>Around ₹1.91 crore NUDA funds utilized.</li>
                    <li>
                      CC roads constructed in divisions 3, 16, 20, 22, 24, 25,
                      26 and 30.
                    </li>
                  </ul>
                </div>
              </div>


               <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="development-img">
                  <img src={development5img} alt="" />
                  <img src={development6img} alt="" />
                  <img src={development7img} alt="" />
                  <img src={development8img} alt="" />
                </div>
              </div> 
            </div>
          </div>

        </div>
      </section>
      <section
        className="dw-wrap"
        ref={sectionRef}
        aria-label="Development Work"
      >
        {/* Header */}
        <div className="dw-hdr dw-animate">
          <div className="dw-hdr-left">
            <span className="dw-eyebrow">MLA · Gurzala Constituency</span>
            <h2 className="dw-title">Development Work</h2>
          </div>
          <p className="dw-hdr-right">
            Agriculture · Infrastructure · Welfare
            <br />
            Across all 4 Mandals of Gurzala
          </p>
        </div>

        {/* Stats Strip */}
        <div className="dw-stat-strip">
          {stats.map((s, i) => (
            <div
              className="dw-stat-chip dw-animate"
              key={i}
              style={{ "--delay": `${i * 80}ms` }}
            >
              <span className="dw-stat-ico" aria-hidden="true">
                {s.icon}
              </span>
              <div>
                <div className="dw-stat-val">{s.val}</div>
                <div className="dw-stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="dw-bento">
          <div
            className="dw-tile dw-road dw-animate"
            style={{ "--delay": "0ms" }}
          >
            <div className="dw-road-inner">
              <div className="dw-road-top">
                <div>
                  <span className="dw-ico" aria-hidden="true">
                    🛣️
                  </span>
                  <h3 className="dw-road-title">Road &amp; Infrastructure</h3>
                </div>
                <span className="dw-road-badge">01</span>
              </div>
              <p className="dw-tdesc">
                Road upgrades, village connectivity, and transport improvements
                strengthening access across the constituency.
              </p>
              <div className="dw-mandal-dots">
                {mandals.map((m) => (
                  <span className="dw-mdot" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <span className="dw-ghost" aria-hidden="true">
              01
            </span>
          </div>

          <div
            className="dw-tile dw-agri dw-animate"
            style={{ "--delay": "80ms" }}
          >
            <span className="dw-ico" aria-hidden="true">
              🌱
            </span>
            <h3 className="dw-road-title">Agriculture &amp; Farmer Welfare</h3>
            <p className="dw-tdesc">
              Championed irrigation, crop assistance, and water resources for
              farming families across Palnadu.
            </p>
            <span className="dw-pill">Farmer's Leader</span>
            <span className="dw-ghost" aria-hidden="true">
              02
            </span>
          </div>

          <div
            className="dw-tile dw-irri dw-animate"
            style={{ "--delay": "160ms" }}
          >
            <span className="dw-ico" aria-hidden="true">
              💧
            </span>
            <h3 className="dw-road-title">Irrigation Projects</h3>
            <p className="dw-tdesc">
              Enhanced irrigation &amp; drinking water access for agriculture
              and rural communities in the Palnadu belt.
            </p>
            <span className="dw-pill">Palnadu Belt</span>
            <span className="dw-ghost" aria-hidden="true">
              03
            </span>
          </div>

          <div
            className="dw-tile dw-edu dw-animate"
            style={{ "--delay": "240ms" }}
          >
            <span className="dw-ico dw-ico-dark" aria-hidden="true">
              🎓
            </span>
            <h3 className="dw-road-title" style={{ color: "black" }}>
              Education Support
            </h3>
            <p className="dw-tdesc dw-tdesc-dark">
              Government school improvements and quality education access for
              rural area students.
            </p>
            <span className="dw-pill dw-pill-dark">Rural Education</span>
            <span className="dw-ghost dw-ghost-dark" aria-hidden="true">
              04
            </span>
          </div>

          <div
            className="dw-tile dw-health dw-animate"
            style={{ "--delay": "320ms" }}
          >
            <span className="dw-ico" aria-hidden="true">
              🏥
            </span>
            <h3 className="dw-road-title">Healthcare Access</h3>
            <p className="dw-tdesc">
              Strengthened medical services including development of Govt
              Medical College &amp; Hospital at Piduguralla.
            </p>
            <span className="dw-pill">PHC Upgrades</span>
            <span className="dw-ghost" aria-hidden="true">
              05
            </span>
          </div>

          <div
            className="dw-tile dw-youth dw-animate"
            style={{ "--delay": "400ms" }}
          >
            <div className="dw-youth-left">
              <div className="dw-youth-big">Youth</div>
              <div className="dw-youth-lbl">Employment &amp; Skills</div>
            </div>
            <div className="dw-ydivider" aria-hidden="true" />
            <div className="dw-youth-right">
              <span className="dw-ico" aria-hidden="true">
                💼
              </span>
              <h3 className="dw-tname">Youth Employment</h3>
              <p className="dw-tdesc">
                Promoted skill development, employment awareness, and
                sustainable career opportunities for youth across the
                constituency to build lasting livelihoods.
              </p>
            </div>
            <span className="dw-pill dw-pill-abs">Youth Focus</span>
            <span className="dw-ghost" aria-hidden="true">
              06
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
