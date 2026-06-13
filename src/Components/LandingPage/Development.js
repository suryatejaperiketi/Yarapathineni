import React from "react";
import "../../Styles/development.css";
import {
  FaUsers,
  FaLink,
  FaMobileAlt,
  FaRulerCombined,
  FaBuilding,
  FaRoad
} from "react-icons/fa";
import { PiTrafficConeFill } from "react-icons/pi";
import dbannerimg from "../../assests/developmentbanner.png";
import roadimg from "../../assests/road.png";
import gurazalaImg from "../../assests/road.png";
import rentapallaImg from "../../assests/road.png";
import gogulapaduImg from "../../assests/road.png";

const infrastructureData = [
  {
    title: "Gogulapadu Town",
    desc: "Construction of CC Roads in several localities to improve connectivity and public convenience.",
    img: roadimg,
  },
  {
    title: "Kesanapalli",
    desc: "CC Road Construction Works worth ₹30 Lakhs completed to strengthen village infrastructure.",
    img: roadimg,
  },
  {
    title: "Piduguralla Town",
    desc: "Construction of CC Roads in multiple areas to enhance transportation.",
    img: roadimg,
  },
  {
    title: "Machavaram",
    desc: "₹30 Lakhs allocated and successfully utilized for CC Road infrastructure development.",
    img: roadimg,
  },
];

const ccDivisions = [3, 16, 20, 22, 24, 25, 30];




const urbanData = [
  {
    image: gurazalaImg,
    title: "Gurazala Municipality",
    desc: "Development works initiated in several wards to improve civic amenities and public infrastructure."
  },
  {
    image: rentapallaImg,
    title: "Rentapalla Municipality",
    desc: "Multiple development projects launched across various wards for better urban facilities and citizen services."
  },
  {
    image: gogulapaduImg,
    title: "Gogulapadu Municipality",
    desc: "Multiple development projects launched across various wards for better urban facilities and citizen services."
  }
];

const impactStats = [
  {
    icon: "🏙️",
    value: "2",
    label: "Major Towns Benefited",
    bgColor: "#7a0f0f",
  },
  {
    icon: "🏛️",
    value: "2",
    label: "Municipalities Covered",
    bgColor: "#d89414",
  },
  {
    icon: "₹",
    value: "₹1.91+",
    label: "Crore Development Funds Utilized",
    bgColor: "#1d8a43",
  
  },
  {
    icon: "👨‍🌾",
    value: "458",
    label: "Farmers Benefited",
    bgColor: "#1f5db8",
  },
  {
    icon: "🚧",
    value: "Multiple",
    label: "CC Roads Constructed",
    bgColor: "#7a0f0f",
  },
  {
    icon: "👥",
    value: "Improved",
    label: "Civic Infrastructure Across the Constituency",
    bgColor: "#d89414",
  },
];

const passBookFeatures = [
  "Distribution of new tamper-proof Pattadar Passbooks",
 
  "Digital ownership authentication through Aadhaar-linked e-KYC",
  "Reduction of land disputes through Resurvey 2.0",
  "Easy access to land records through the MeeBhoomi portal",
];

const glanceStats = [
  {
    icon: <FaUsers />,
    iconClass: "icon-users",
    value: "1.12 Crore+",
    label: "Pattadar Passbooks to be distributed",
  },
  {
    icon: <FaLink />,
    iconClass: "icon-blockchain",
    value: "Blockchain Security",
    label: "for land ownership protection",
  },
  {
    icon: <FaMobileAlt />,
    iconClass: "icon-qr",
    value: "QR Code Verification",
    label: "for instant authentication in Seconds",
  },
  {
    icon: <FaRulerCombined />,
     iconClass: "icon-resurvey",
    value: "Resurvey 2.0",
    label: "underway across Andhra Pradesh",
  },

];

export default function Development() {


  return (
    <div className="lop-root">
       <section className="lop-hero">
        <div className="row">
       
       
        <div className="col-lg-12 col-sm-12">
        <div>
      <img src={dbannerimg} alt="" className="w-100"/>
        </div>
          </div>
        </div>
      </section>
     


      <section className="lop-infra">
  <div className="lop-infra-heading mb-3 mt-3">
    <div className="lop-infra-top-icon"><FaBuilding style={{color:"green"}}/></div>

    <h2>Infrastructure Development</h2>

    <div className="lop-infra-divider">
      <span></span>
    </div>

    <p>
      Building better roads for stronger communities and a brighter future.
    </p>
  </div>

  <div className="lop-infra-grid">
    {infrastructureData.map((item, i) => (
      <div key={i} className="lop-infra-card">

        <div className="lop-infra-img">
          <img src={item.img} alt={item.title} />
        </div>

        <div className="lop-floating-icon">
          <FaBuilding/>
        </div>

        <div className="lop-card-content">
          <h3>{item.title}</h3>

          <div className="lop-card-divider">
            <span></span>
          </div>

          <p>{item.desc}</p>

          {item.amount && (
            <div className="lop-amount">
              ₹ {item.amount}
            </div>
          )}
        </div>

      </div>
    ))}
  </div>
</section>

        {/* THREE COLUMN SECTION */}
      <section className="lop-achievement-section">

    {/* TOP AREA */}
    <div className="lop-top-grid">

      {/* LEFT */}
    <div className="lop-land-card">

    <h2 className="lop-main-title">
      Andhra Pradesh Land Records &
      <span>Pattadar Passbook Reforms</span>
    </h2>

    <p className="lop-subtitle">
      Secure Land Ownership for Farmers
    </p>

    <div className="lop-land-content">

      {/* LEFT COLUMN */}
      <div className="lop-land-text">

        <div className="lop-stat-card">

          <div className="lop-stat-icon">
            📗
          </div>

          <div className="lop-stat-content">
            <h3>1.12 Crore+</h3>
            <p>Tamper-Proof Pattadar Passbooks</p>
          </div>

        </div>

        <p className="lop-land-desc">
          The Government of Andhra Pradesh has launched a
          comprehensive land records modernization program
          to ensure transparent and secure land ownership
          for farmers. The initiative includes:
        </p>

        <ul className="lop-land-features">
          {passBookFeatures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="lop-footer-text">
          This initiative aims to provide farmers with legally
          secure land ownership documents while improving
          transparency and efficiency in land administration
          across Andhra Pradesh.
        </p>

        <div className="lop-source">
          <strong>Source:</strong> The Times of India
        </div>

      </div>

      {/* RIGHT COLUMN */}
      

    </div>

  </div>

      {/* RIGHT */}
      <div className="lop-urban-card">

        <div className="lop-urban-header">
          🏙️ Urban Development
        </div>

        {urbanData.map((item,index)=>(
          <div className="lop-urban-item" key={index}>

            <img src={item.image} alt="" />

            <div className="urban-cont">
              <h4> <FaBuilding className="urban-icon"/> {item.title}</h4>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  </section>

  {/* IMPACT SECTION */}

<div className="lop-glance-card">

    <h3>Impact at a Glance</h3>

    <div className="lop-glance-grid">

      {glanceStats.map((item,index)=>(
        <div className="lop-glance-box" key={index}>
      
          <span className={`glance-icon ${item.iconClass}`}>
  {item.icon}
</span>
          <h4>{item.value}</h4>
          <p>{item.label}</p>
        </div>
      ))}

    </div>

  </div>


  <section className="nuda-road-section">

  {/* NUDA CARD */}
  <div className="nuda-card">

    <h2 className="nuda-title">
      NUDA Development Funds
    </h2>

    <p className="nuda-subtitle">
      Infrastructure & Civic Improvement
    </p>

    <div className="nuda-fund-box">

      <div className="nuda-money">
        💰
      </div>

      <div>
        <h3>₹1.91 Crore</h3>

        <p>
          Approximately of NUDA Funds utilized for
          developmental activities benefiting residents
          and improving public infrastructure.
        </p>
      </div>

    </div>

    <h4 className="development-heading">
      Development Highlights
    </h4>

    <div className="nuda-highlights">

      <div className="highlight-box">
        <div className="icon">🛣️</div>
        <span>50+ KM CC Roads Developed</span>
      </div>

      <div className="highlight-box">
        <div className="icon">💧</div>
        <span>Drinking Water Projects</span>
      </div>

      <div className="highlight-box">
        <div className="icon">🌱</div>
        <span>Green Village Initiatives</span>
      </div>

      <div className="highlight-box">
        <div className="icon">🏢</div>
        <span>Urban Infrastructure Upgrades</span>
      </div>

    </div>

  </div>

  {/* CC ROADS CARD */}

  <div className="cc-card">

    <div className="cc-content">

      <div className="cc-left">

        <h2 className="cc-title">
          CC Roads Constructed
        </h2>

        <h5>
          Major CC Road works completed in:
        </h5>

        <div className="division-grid">

          <div>✔ Division 3</div>
          <div>✔ Division 24</div>

          <div>✔ Division 16</div>
          <div>✔ Division 25</div>

          <div>✔ Division 20</div>
          <div>✔ Division 30</div>

          <div>✔ Division 22</div>

        </div>

        <p className="cc-desc">
          These projects have significantly improved
          road connectivity, drainage management,
          public safety, and overall quality of life
          for citizens.
        </p>

      </div>

      <div className="cc-image">

        <img
          src={roadimg}
          alt="CC Road"
        />

      </div>

    </div>

  </div>

</section>

      {/* IMPACT AT A GLANCE */}
      <section className="lop-section lop-impact">
        <h2 className="lop-impact-title">Impact at a Glance</h2>
        <div className="lop-impact-divider"></div>
        <div className="lop-impact-grid">
          {impactStats.map((s, i) => (
            <div key={i} className="lop-impact-card">
              <span className="lop-impact-icon" style={{ backgroundColor: s.bgColor }}>{s.icon}</span>
              <div className="lop-impact-val">{s.value}</div>
              <div className="lop-impact-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE FOOTER */}
      <footer className="lop-footer">
        <span className="lop-quote-mark left">"</span>
        <span className="lop-quote-text">Development Today for a Stronger Tomorrow</span>
        <span className="lop-quote-mark right">"</span>
      </footer>
    </div>
  );
}
