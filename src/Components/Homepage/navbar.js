/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./navbar.css";
import logo from "../Utils/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPaperSectionInNewTab = () => {
    window.open("/paper", "_blank");
  };
  const openBlogSectionInNewTab = () => {
    window.open("/blog", "_blank");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Abhishek Amgain" className="navbar-logo" />
          </a>
          <button
            className="btn btn-close d-lg-none position-absolute end-0 top-0 mt-2 me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Close"
          ></button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("project")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("research")}
                >
                  Research
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" onClick={openPaperSectionInNewTab}>
                  Papers
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" onClick={openBlogSectionInNewTab}>
                  Blog
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Overlay */}
      <div
        className={`overlay ${isMenuOpen ? "show" : ""}`}
        onClick={handleMenuToggle}
      ></div>
    </>
  );
}

export default NavBar;
