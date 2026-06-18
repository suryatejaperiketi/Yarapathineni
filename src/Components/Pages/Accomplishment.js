import React from "react";
import "../../Styles/Accomplishment.css";
import accomplbannerimg from "../../assests/accomp-banner.png";
import accompimg1 from "../../assests/house.png";
import accompimg2 from "../../assests/cbnbheema.png";
import accompimg3 from "../../assests/acrf.png";
import accompimg4 from "../../assests/pension.png";
import accompimg5 from "../../assests/aagriculture.png";
import accompimg6 from "../../assests/dwakra.png";
import accompimg7 from "../../assests/aroad.png";
import accompimg8 from "../../assests/agas.png";
import bannerbottomimg from "../../assests/bottom-banner.png";

import {
  FaHouse,
  FaHandHoldingHeart,
  FaPersonCane,     
  FaSeedling,
  FaUsers,
  FaBridge,
  FaGasPump,
  FaHeartCirclePlus,
} from "react-icons/fa6";

const Accomplishment = () => {
  const data = [
    {
      icon: <FaHouse />,
      image: accompimg1,
      title: "Nearly 5700 Houses",
      value: "Worth ₹97.50 Crores",
      desc: "Had been sanctioned to fulfil the dream of own houses for every family.",
      color: "#7b1e1e",
    },

    {
      icon: <FaHandHoldingHeart />,
      image: accompimg2,
      title: "Chandranna Bheema",
      value: "₹4.20 Crores",
      desc: "Distributed to 620 beneficiaries under the welfare scheme.",
      color: "#d48806",
    },

    {
      icon: <FaHeartCirclePlus />,
      image: accompimg3,
      title: "CM Relief Fund",
      value: "₹12.50 Crores",
      desc: "Provided financial support to distressed people.",
      color: "#8b1e1e",
    },

    {
      icon: <FaPersonCane />,
      image: accompimg4,
      title: "34,267 Pensioners",
      value: "Monthly Benefits",
      desc: "Beneficiaries under NTR Bharosa Scheme.",
      color: "#d48806",
    },

    {
      icon: <FaSeedling />,
      image: accompimg5,
      title: "70,934 Farmers",
      value: "₹263 Crores",
      desc: "Farm loans waived under Raithu Runamaafi Scheme.",
      color: "#2e7d32",
    },

    {
      icon: <FaUsers />,
      image: accompimg6,
      title: "10,096 DWCRA Groups",
      value: "₹36 Crores",
      desc: "Loans waived for women self-help groups.",
      color: "#6a1b9a",
    },

    {
      icon: <FaBridge />,
      image: accompimg7,
      title: "22 Bridges",
      value: "₹86.13 Crores",
      desc: "Major bridge projects completed for public connectivity.",
      color: "#1f4ba5",
    },

    {
      icon: <FaGasPump />,
      image: accompimg8,
      title: "Free Gas Scheme",
      value: "Women Empowerment",
      desc: "Reduced household expenses with safer cooking facilities.",
      color: "#d97706",
    },
  ];

  return (
    <div className="accomplishment-page">

      {/* Hero Section */}

     <section className="acc-hero">

  <div className="acc-banner-wrapper">

    <img
      src={accomplbannerimg}
      alt="Accomplishment Banner"
      className="acc-banner-img"
    />

  </div>

</section>

      {/* Cards */}

      <section className="accomplishment-grid p-3">

        {data.map((item, index) => (

          <div className="achievement-card" key={index}>

            {/* Add achievement image */}

            <div className="card-image">

           
               <img src={item.image} alt={item.title}/>

            </div>

            <div
              className="card-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <div className="card-content">

              <h3>{item.title}</h3>

              <h4>{item.value}</h4>

              <p>{item.desc}</p>

              <span>•••</span>

            </div>

          </div>

        ))}
      </section>

      {/* Bottom Banner */}

      <section className="bottom-banner mb-2">

        <img src={bannerbottomimg} alt="" />

      </section>

    </div>
  );
};

export default Accomplishment;