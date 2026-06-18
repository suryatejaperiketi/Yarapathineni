import React from "react";
import {
  FaSearch,
  FaUserCircle,
  FaPhoneAlt,
  FaRegCommentDots,
  FaImage,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../../Styles/AdminContactus.css";

function AdminContactus() {
    const navigate =useNavigate();
  const contacts = [
    {
      id: 1,
      name: "Subba Rao",
      phone: "+91 7816058640",
      message: "Road Repair Request",
      status: "Resolved",
    },
    {
      id: 2,
      name: "Raju",
      phone: "+91 7816058640",
      message: "Street Light Installation",
      status: "Resolved",
    },
  ];

  return (
    <div className="container-fluid admin-contact-page">

      {/* Header */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6 text-center">
          <h3 className="contact-title">Contact Us</h3>
        </div>

        <div className="col-md-6 text-end">
          <h5>Total Contacts Today: 12</h5>

          <h6>
            <span className="pending-count">Pending: 5</span>{" "}
            |
            <span className="resolved-count">
              {" "}Resolved: 7
            </span>
          </h6>
        </div>
      </div>

      {/* Search */}
      <div className="row align-items-center mb-3">

        <div className="col-md-8">
          <div className="search-box">
            <FaSearch />

            <input
              type="text"
              placeholder="Search contact by name or message"
            />
          </div>
        </div>

        <div className="col-md-4 text-end">
          <button className="btn btn-danger delete-btn">
            Delete
          </button>
        </div>

      </div>

      {/* Contact Count */}
      <div className="d-flex align-items-center mb-3">
        <input type="checkbox" />
        <h5 className="ms-3 mb-0">2 Contacts</h5>
      </div>

      {/* Contact Cards */}
      {contacts.map((item) => (
        <div className="contact-card" key={item.id}>

          <input
            type="checkbox"
            className="contact-checkbox"
          />

          <div className="contact-image">
            <FaImage />
          </div>

          <div className="contact-details">

            <div className="detail-row">
              <FaUserCircle className="detail-icon" />

              <h4>{item.name}</h4>
            </div>

            <div className="detail-row">
              <FaPhoneAlt className="detail-icon" />

              <span>{item.phone}</span>
            </div>

            <div className="detail-row">
              <FaRegCommentDots className="detail-icon" />

              <span>{item.message}</span>
            </div>

          </div>

          <div className="contact-right">

            <span className="resolved-status">
              {item.status}
            </span>

            <button onClick={()=>navigate("/dashboard/viewcontact")} className="btn btn-primary btn-sm px-4">
              View
            </button>
            
          </div>

        </div>
      ))}
    </div>
  );
}

export default AdminContactus;