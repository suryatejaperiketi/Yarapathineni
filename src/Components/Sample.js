// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../../Styles/Sidebar.css";

// function Sidebar() {
//   const [openMenus, setOpenMenus] = useState({});
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   return (
//     <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
//       {/* HEADER */}

//       <ul className="sidebar-menu">
//         <li>
//           <NavLink
//             to="/dashboard/"
//             end
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Dashboard
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/dashboard/student"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Student
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/agriculture"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Agriculture
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/employee"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Employee
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/business"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Business
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/others"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Others
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/devents"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Events
//           </NavLink>
//         </li>
      
//          <li>
//           <NavLink
//             to="/dashboard/admin-schools-collgs"
//             className={({ isActive }) =>
//               isActive ? "menu-item active" : "menu-item"
//             }
//           >
//             Colleges & Schools
//           </NavLink>
//         </li>
        

//       </ul>
      
//     </div>
    
//   );
// }

// export default Sidebar;