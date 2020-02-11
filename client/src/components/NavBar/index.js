import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/HatchfulExport-All/logo.png";

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" id="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="logo" id="logo" />
        </Link>
        <label
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              htmlFor="nav-toggle-state"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </label>
          </div>
          <input type="checkbox" id="nav-toggle-state" />

          <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" id="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" id="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
