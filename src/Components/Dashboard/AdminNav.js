import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaUser,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/AdminNav.css";
 
import profilePic from "../../assests/logo2.png";
 
function AdminNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
 
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
 
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
 
  const handleLogout = () => {
 
    localStorage.clear();
 
 
    navigate("/");
 
 
    setDropdownOpen(false);
  };
 
  return (
    <nav className="adminnav-container">
      <div className="adminnav-left">
 
        <Link to="/dashboard" className="adminnav-title-link">
          <span className="adminnav-title">ADMIN</span >
        </Link>
      </div>
 
      <div className="adminnav-center">
 
        <span className="adminnav-center-text"></span>
 
      
 
      </div>
 
      <div className="adminnav-right">
        <FaBell className="adminnav-right-icon" />
        {/* <FaCog className="adminnav-right-icon" /> */}
        <div className="adminnav-profile" ref={dropdownRef}>
          <img
            src={profilePic}
            alt="Profile"
            className="adminnav-profile-img"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="adminnav-dropdown">

               <p
                onClick={() => {
                  navigate("/dashboard/CandidateProfile"); 
                  setMenuOpen(false);
                }}
              >
               <button className="adminnav-dropdown-item">
                <FaUser className="adminnav-dropdown-icon" /> My Profile
              </button>
              </p>
              
              <button className="adminnav-dropdown-item">
                <FaLock className="adminnav-dropdown-icon" /> Change Password
              </button>
 
              <button
                className="adminnav-dropdown-item adminnav-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="adminnav-dropdown-icon" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
 
export default AdminNav;