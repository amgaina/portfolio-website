import React from "react";
import "./about.css";
import MyImage from "../Utils/myImage.png";
import LinkedIn from "../Utils/LinkedIn.png";
import GitHubIcon from "../Utils/github.png";
import Instagram from "../Utils/instagram.png";
import GmailLogo from "../Utils/gmail_logo.png";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h1 className="about-page-title mb-5">ABOUT ME</h1>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Column for Image */}
          <div className="col-md-6 text-center">
            <img src={MyImage} alt="About Me" className="about-pic" />
          </div>

          {/* Column for Description */}
          <div className="col-md-6 about-text white-background">
            <h2 className="about-title animated fadeInRight">
              Passionate Machine Learning Engineer
            </h2>
            <p className="animated fadeInRight text-black">
              <ul>
                <li>
                  Double majoring in Computer Science and Mathematics, with a
                  strong focus on Machine Learning, AI, and Data Science.
                </li>
                <li>
                  Passionate about building models to solve real-world problems,
                  from image recognition to object detection.
                </li>
                <li>
                  Over 3 years of experience in data analysis and machine
                  learning projects.
                </li>
                <li>
                  Especially excited about working with natural language
                  processing(NLP) models.
                </li>
              </ul>
              <p>
                <strong>Relevant Certifications:</strong>
                <div className="certifications">
                  <br />
                  - Machine Learning Specialization (Stanford University)
                  <br />- Deep Learning Specialization (Stanford University)
                </div>
              </p>
            </p>
            <p className="animated fadeInRight text-black">
              Combining creativity, mathematics, and programming, I am always
              eager to take on new challenges and grow as an engineer.
            </p>

            <div className="social-links animated fadeInRight mt-5">
              <a
                href="https://www.linkedin.com/in/abhishek-amgain-04b642265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="GitHub"
                  className="about-social-icon"
                />
              </a>
              <a
                href="https://github.com/amgaina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubIcon}
                  alt="GitHub"
                  className="about-social-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="about-social-icon"
                />
              </a>
              <a href="mailto:abhi.amgain567@gmail.com">
                <img
                  src={GmailLogo}
                  alt="Gmail"
                  className="about-social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
