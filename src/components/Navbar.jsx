import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Call, Email } from "@material-ui/icons";
import NavbarData from "./NavbarData";

function Navbar() {
  return (
    <>
      <div id="header">
        <nav className="navbar navbar-dark fixed-top">
          <div className="container">
            <div className="d-flex align-items-center">
              <NavLink to="/" className="navbar-brand text-decoration-none">
                <span className="logoFont">D</span>ev
              </NavLink>
              <div className="person-contact-info text-light">
                <span className="person-icon mx-3">
                  <Call />
                </span>
                <span className="phone">+8801626924395</span>
              </div>
              <div className="person-contact-info text-light">
                <span className="person-icon mx-3">
                  <Email />
                </span>
                <span className="email">annur4395@gmail.com</span>
              </div>
            </div>
            <button
              className="btn text-light bars"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <FaBars />
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <NavLink to="/" className="navbar-brand">
                    <span className="logoFont text-danger">D</span>ev
                  </NavLink>
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* -----------------map----------------- */}
                    {NavbarData.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <NavLink
                          exact
                          activeClassName="active-menu"
                          className="nav-link text-dark"
                          aria-current="page"
                          to={item.url}
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* -------------- */}
    </>
  );
}

export default Navbar;
