import React from "react";
import profileImage from "../Utils/abhishek.png";
import "./home.css";
import NavBar from "./navbar";

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="home"
      id="home"
      style={{ backgroundColor: "#f4f4f9", minHeight: "100vh" }}
    >
      <NavBar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <img
            src={profileImage}
            alt="Abhishek Amgain"
            className="rounded-circle mb-4"
            style={{
              width: "150px",
              height: "150px",
              border: "5px solid #007bff",
            }}
          />
          <h1
            className="display-4 mb-2"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Abhishek Amgain
          </h1>
          <p className="lead" style={{ fontStyle: "italic", color: "#555" }}>
            AI & Machine Learning Enthusiast
          </p>
          <p
            className="text-muted mb-4"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Exploring the intersection of technology and innovation through AI, 
            machine learning and data science.
          </p>
          <button
            className="btn btn-outline-primary btn-lg"
            style={{ fontFamily: "'Courier New', monospace" }}
            onClick={() => scrollToSection("project")}
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
