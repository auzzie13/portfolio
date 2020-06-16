import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import logo from "../../assets/HatchfulExport-All/logo_transparent.png";

function NavBar() {
  return (
    // <nav className="navbar-collapse navbar navbar-expand-lg bg-transparent fixed-top" id="nav-bar">
    //   <Link className="navbar-brand" to="/">
    //     <img src={logo} width="70" height="70" alt="logo" id="logo" />
    //   </Link>
    //   <button
    //     className="navbar-toggler collapse"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#responsive-navbar-nav"
    //     aria-controls="responsive-navbar-nav"
    //     aria-expanded="false"
    //     aria- ="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div
    //     className="collapse navbar-collapse d-inline-flex justify-content-end"
    //     id="responsive-navbar-nav"
    //   >
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link className="nav-link" id="navbar-item1" to="/projects">
    //           Projects
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" id="navbar-item2" to="/contact">
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <Navbar  id="nav-bar" sticky="top" bg="transparent">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="70em"
          height="70em"
          className="img-fluid"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
        <Nav >
          <Nav.Link href="/projects" id="nav-link1">Projects</Nav.Link>
          <Nav.Link href="/contact" id="nav-link2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
