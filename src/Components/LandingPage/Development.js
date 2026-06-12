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
import passbookimg from "../../assests/farmerpasbook.png";

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
    value: "1.12 Crore+",
    label: "Pattadar Passbooks to be distributed",
  },
  {
    icon: <FaLink />,
    value: "Blockchain Security",
    label: "for land ownership protection",
  },
  {
    icon: <FaMobileAlt />,
    value: "QR Code Verification",
    label: "for instant authentication in Seconds",
  },
  {
    icon: <FaRulerCombined />,
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
  <div className="lop-infra-heading">
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
      <section className="lop-section lop-three-col">
        {/* LAND RECORDS */}
   <div className="lop-land-card">

  <div className="lop-land-header">
    <span className="lop-land-icon">🌱</span>

    <div className="lop-land-header-content">
      <h3>Andhra Pradesh Land Records & Pattadar Passbook Reforms</h3>
      <p className="lop-land-tagline">
        Secure Land Ownership for Farmers
      </p>
    </div>
  </div>

  <div className="lop-land-stat">
    <span className="lop-land-big">1.12 Crore+</span>
    <span className="lop-land-stat-label">
      Tamper-Proof Pattadar Passbooks
    </span>
  </div>

  <div className="lop-info-section">

    <div className="lop-passbook-visual">
      <div className="lop-passbook-book">
        <div className="lop-passbook-emblem">
          <img src={passbookimg} alt="passbook"/>
        </div>

      </div>

      {/* <div className="lop-passbook-icons">
        <div className="lop-passbook-qr">📱</div>
        <div className="lop-passbook-lock">🔒</div>
      </div> */}
    </div>

    <div className="lop-content-right">

      <p className="lop-land-desc">
        The Government of Andhra Pradesh has launched a comprehensive
        land records modernization program to ensure transparent and
        secure land ownership for farmers. The initiative includes:
      </p>

      <ul className="lop-land-features">
        {passBookFeatures.map((f, i) => (
          <li key={i}>
            <span className="lop-check">✅</span>
            {f}
          </li>
        ))}
      </ul>

    </div>

  </div>

  <p className="lop-land-footer">
    This initiative aims to provide farmers with legally secure land
    ownership documents while improving transparency and efficiency in
    land administration across Andhra Pradesh.
  </p>

  <p className="lop-source">
    <strong>Source:</strong> The Times of India
  </p>

</div>



        {/* URBAN DEVELOPMENT */}
        <div className="lop-urban-col">
          <div className="lop-urban-card">
            <div className="lop-urban-header">
              <span className="lop-urban-icon">🏙️</span>
              <h3>Urban Development</h3>
            </div>
            <div className="lop-urban-item">
              <span className="lop-urban-item-icon">🏛️</span>
              <div>
                <h4>Gurazala Municipality</h4>
                <p>Development works initiated in several wards to improve civic amenities and public infrastructure.</p>
              </div>
            </div>
            <div className="lop-urban-item">
              <span className="lop-urban-item-icon">🏛️</span>
              <div>
                <h4>Rentapalla Municipality</h4>
                <p>Multiple development projects launched across various wards for better urban facilities and citizen services.</p>
              </div>
            </div>
             <div className="lop-urban-item">
              <span className="lop-urban-item-icon">🏛️</span>
              <div>
                <h4>Gogulapadu Municipality</h4>
                <p>Multiple development projects launched across various wards for better urban facilities and citizen services.</p>
              </div>
            </div>
            
            
          </div>
          

          {/* GLANCE */}
          <div className="lop-glance-card">
  <h4 className="lop-glance-title">Impact at a Glance</h4>

  <div className="lop-glance-grid">
  {glanceStats.map((s, i) => (
    
    <div key={i} className="lop-glance-item">
      <span className="lop-glance-icon">{s.icon}</span>

      <div className="lop-glance-content">
        <div className="lop-glance-val">{s.value}</div>
        <div className="lop-glance-lbl">{s.label}</div>
      </div>
    </div>
  ))}
</div>

  <p className="lop-source">
    <strong>Source:</strong> The Times of India 🔗
  </p>
</div>


        </div>

        {/* NUDA */}
       <div className="lop-right-column">

  {/* NUDA */}
  <div className="lop-nuda-card">
    <div className="lop-nuda-header">
      <span className="lop-nuda-icon">💰</span>
      <h3>NUDA Development Funds</h3>
    </div>

    <p className="lop-nuda-sub">
      Infrastructure & Civic Improvement
    </p>

    <div className="lop-nuda-amount">
      ₹1.91 Crore
    </div>

    <div className="lop-nuda-chart">
      <div className="lop-nuda-arrow">📈</div>
      <div className="lop-nuda-moneybag">💰</div>
    </div>

    <p className="lop-nuda-desc">
      Approximately of NUDA Funds utilized for developmental activities
      benefiting residents and improving public infrastructure.
    </p>
  </div>

  {/* NEW CARD */}
  <div className="lop-mini-card">
    <h4>Development Highlights</h4>

    <div className="lop-mini-item">
      🛣️ 50+ KM CC Roads Developed
    </div>

    <div className="lop-mini-item">
      💧 Drinking Water Projects
    </div>

    <div className="lop-mini-item">
      🌳 Green Village Initiatives
    </div>

    <div className="lop-mini-item">
      🏛️ Urban Infrastructure Upgrades
    </div>
  </div>

</div>

        
      </section>

      {/* CC ROADS */}
      <section className="lop-section lop-ccroads">
  <div className="lop-cc-wrap">

    <div className="lop-cc-left">
      <div className="lop-section-header">
        
        <h2><FaRoad className="rd-icon"/> CC Roads Constructed</h2>
      </div>

      <div className="lop-cc-row">
        <span className="lop-cc-label">
          Major CC Road works completed in:
        </span>

        <div className="lop-cc-divs">
          {ccDivisions.map((d) => (
            <div key={d} className="lop-cc-div">
              <span className="lop-cc-cone"><PiTrafficConeFill/></span>
              <span>Division {d}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="lop-cc-desc">
        These projects have significantly improved road connectivity,
        drainage management, public safety, and overall quality of life
        for citizens.
      </p>
    </div>

    <div className="lop-cc-img">
      <img
        src={roadimg}
        alt="CC Road"
      />
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
