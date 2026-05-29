import React from "react";
import "../../Styles/Accomplishment.css";
import accompimg1 from "../../assests/accomp-img1.png";
import accompimg2 from "../../assests/accomp-img2.png";
import accompimg3 from "../../assests/accomp-img3.png";
import accompimg4 from "../../assests/accomp-img4.png";
import accompimg5 from "../../assests/accomp-img5.png";
import accompimg6 from "../../assests/accomp-img6.png";
import accompimg7 from "../../assests/accomp-img7.png";
import accompimg8 from "../../assests/accomp-img8.png";
import accompbannerimg from "../../assests/accomp-banner.png";
 
 
const Accomplishment = () => {
    const data = [
        {
            image: accompimg1,
            text: "Nearly  5700 Houses Worth 97.50 Crores had been sanctioned to fulfil the dream of own houses for every family"
        },
        {
            image: accompimg2,
            text: "Under chandranna bheema scheme a total of 4.20 crores had been distributed to 620 people"
        },
        {
            image: accompimg3,
            text: "Under CM relief fund 12.50 crores had been distributed to healp the  distressed people"
        },
        {
            image: accompimg4,
            text: "Every Month 34,267 pensioners are benefited under NTR bharosa scheme"
        }, {
            image: accompimg5,
            text: "A total of 70,934 farmers loans worth 263 crores had been  waived off under Raithu Runamaafi Scheme"
        },
        {
            image: accompimg6,
            text: "Loans of about 36 crores for 10,096 Dwakra groups had been Waved off"
        },
        {
            image: accompimg7,
            text: "As promised constructed 22 bridges like NTR  vaaradhi and Koniki  worth 86.13 crore fulfilling peoples dream  for decades"
        },
        {
            image: accompimg8,
            text: "The Free Gas Cylinder Scheme empowers women by reducing household expenses and ensuring safe cooking facilities for every family."
        }
    ]
    return (
        <>
        <div className="accomplishment-sec">
            <div class="card text-bg-dark">
                <img src={accompbannerimg} class="card-img" alt="Accomplishment Banner" />
                <div class="card-img-overlay">
                    <h3 class="card-title text-center acc-heading" style={{ color: "black" }}>ACCOMPLISHMENT</h3>
                </div>
            </div>
            <div className="row ">
                {data.map((item, index) => (
                    <div className=" col-lg-3 col-md-6 col-12  mt-4  " key={index}>
                        <div className="card card-accomp-container">
                            <img src={item.image} class="card-img-top mx-auto d-block p-2" style={{ width: "200px", height: "900px" }} alt="..." />
                            <div class="card-body">
                                <p class="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
      
        </>
    )
}
export default  Accomplishment;