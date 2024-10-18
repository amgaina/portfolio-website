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
    setIsMenuOpen(false);
  };

  const openSectionInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navItems = [
    { name: "About", action: () => scrollToSection("about") },
    { name: "Education", action: () => scrollToSection("education") },
    { name: "Projects", action: () => scrollToSection("project") },
    { name: "Research", action: () => scrollToSection("research") },
    { name: "Experience", action: () => scrollToSection("experience") },
    { name: "Papers", action: () => openSectionInNewTab("#/paper") },
    { name: "Blog", action: () => openSectionInNewTab("#/blog") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} alt="Abhishek Amgain" className="navbar-logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <button className="nav-link btn btn-link" onClick={item.action}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
