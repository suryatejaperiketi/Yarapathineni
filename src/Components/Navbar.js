import React, { useRef } from "react";
import "../Styles/Navbar.css";
import { Navigate, NavLink, useNavigate} from "react-router-dom";
import logo from "../assests/logo2.png";

function Navbar() {
  const navbarRef = useRef(null);
  const navigate = useNavigate()

  const closeNavbar = () => {
    setTimeout(() => {
      if (
        navbarRef.current &&
        navbarRef.current.classList.contains("show") &&
        window.bootstrap
      ) {
        const bsCollapse =
          window.bootstrap.Collapse.getInstance(navbarRef.current) ||
          new window.bootstrap.Collapse(navbarRef.current, {
            toggle: false,
          });

        bsCollapse.hide();
      }
    }, 100);
  };
  return (
    <section className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" className="logo-img" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            ref={navbarRef}
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Achievements
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/development"
                      onClick={closeNavbar}
                    >
                      Development
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/spiritual-initiatives"
                      onClick={closeNavbar}
                    >
                      Spiritual Initiatives
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/cmr-funds"
                      onClick={closeNavbar}
                    >
                      CMR Funds
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Multimedia
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/photos"
                      onClick={closeNavbar}
                    >
                      Gallery
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/videos"
                      onClick={closeNavbar}
                    >
                      Videos
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/journey"
                  onClick={closeNavbar}
                >
                  Journey
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/accomplishment"
                  onClick={closeNavbar}
                >
                  Accomplishment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={closeNavbar}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <button className="login-btn" onClick={()=>navigate("/login")}>LOGIN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
