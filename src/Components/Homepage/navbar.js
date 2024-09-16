import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../Utils/logo.png";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBackground = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "bg-dark" : "bg-light"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Abhishek Amgain" className="navbar-logo" />
          </a>
          <button
            className="btn btn-close d-lg-none position-absolute end-0 top-0 mt-2 me-2 "
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
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#research">
                  Research
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#papers">
                  Papers
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-primary ms-auto"
              onClick={toggleBackground}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
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
