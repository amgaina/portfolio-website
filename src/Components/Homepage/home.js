import React from "react";
import "./home.css";
import profileImage from "../Utils/abhishek.PNG";
import NavBar from "./navbar";

function Home() {
  return (
    <div className="home" id = "home">
      <NavBar />
      <div className="our_div">
        <header className="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
          <img
            src={profileImage}
            alt="Abhishek Amgain"
            className="profile-image mb-4"
          />
          <p className="h4 mb-3">Abhishek Amgain</p>
          <h1 className="display-4 mb-3">Welcome to My Portfolio</h1>
          <h2 className="display-5 mb-3 animated-title">AI Research Intern</h2>
          <p className="mb-4 explain">
            Exploring the intersection of technology and innovation through
            machine learning and data science.
          </p>
          <a
            href="#project"
            className="btn btn-primary btn-lg animated-button"
          >
            View My Work
          </a>
        </header>
      </div>
    </div>
  );
}

export default Home;
