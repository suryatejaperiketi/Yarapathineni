import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css";
import { IoIosContact } from "react-icons/io";
import { MdPermMedia } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

import {FaChevronDown,FaChevronUp,FaBriefcase} from  "react-icons/fa";

function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="admin-sidebar">
      <ul className="sidebar-menu">

       <li>
          <NavLink to="/dashboard/dashboard-home" end className="menu-item">
           <LuLayoutDashboard  className="admin-icon" />  Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/admincontact" end className="menu-item">
           <IoIosContact className="admin-icon" />  Contact Us
          </NavLink>
        </li>
        
        <li>
          <div
            className="menu-item dropdown-header"
            onClick={() => toggleMenu("student")}>
             <FaBriefcase className="admin-icon" />

            <span>Works</span>
            <span>{openMenus.student ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>

          {openMenus.student && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/dashboard/student/add"
                  className="submenu-item"
                >
                  Achievements
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/student/view"
                  className="submenu-item"
                >
                  Development
                </NavLink>
              </li>

                <li>
                <NavLink
                  to="/dashboard/cmr-funds"
                  className="submenu-item"
                >
                  CMRF funds
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Employee Dropdown */}
        <li>
          <div
            className="menu-item dropdown-header"
            onClick={() => toggleMenu("employee")}
          >
          <MdPermMedia className="admin-icon"/>
            <span>Multimedia</span>
            <span>{openMenus.employee ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>

          {openMenus.employee && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/dashboard/employee/add"
                  className="submenu-item"
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/employee/view"
                  className="submenu-item"
                >
                  Videos
                </NavLink>
              </li>

               <li>
                <NavLink
                  to="/dashboard/employee/view"
                  className="submenu-item"
                >
                  Press
                </NavLink>
              </li>
            </ul>
          )}
        </li>

       

      </ul>
    </div>
  );
}

export default Sidebar;