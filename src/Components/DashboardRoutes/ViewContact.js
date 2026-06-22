import React from "react";
import "../../Styles/ViewContact.css";
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ViewContact() {
  const navigate = useNavigate();
  return (
    <div className="view-contact-container">

      {/* Header */}

      <div className="contact-header">
        <div className="header-title">
          <span  style={{cursor:"pointer"}} onClick={()=>navigate(-1)}>Quick contacts</span> &gt; Subba rao
        </div>

        <button className="delete-btn">
          Delete
        </button>
      </div>

      {/* Form */}

      <div className="contact-body">

        {/* Left Section */}

        <div className="contact-form-admin">

          <div className="form-row">
            <label>Voter ID</label>
            <input type="text" value="XYZ9876543" readOnly />
          </div>

          <div className="form-row">
            <label>Full Name</label>
            <input type="text" value="Subba Rao" readOnly />
          </div>

          <div className="form-row">
            <label>Phone Number</label>
            <input type="text" value="+91 98765 43210" readOnly />
          </div>

          <div className="form-row">
            <label>Mandal</label>
            <input type="text" value="Kondulur" readOnly />
          </div>

          <div className="form-row">
            <label>Village</label>
            <input type="text" value="Kondulur" readOnly />
          </div>

          <div className="form-row">
            <label>Subject</label>
            <input type="text" value="Road Repair Request" readOnly />
          </div>

          <div className="form-row message-row">
            <label>Message</label>

            <textarea
              readOnly
              value="The main road in Kandukur village has been damaged due to recent rains, causing difficulties for residents and commuters. Kindly arrange for repair work at the earliest for safe transportation."
            />
          </div>

        </div>

        {/* Right Section */}

        <div className="image-section">

          <div className="image-box">
            <FaImage />
          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewContact;