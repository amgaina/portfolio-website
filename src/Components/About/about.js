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
      <h1 className="about-page-title mb-5">About Me</h1>

      <div className="container">
        {/* Row for image and description */}
        <div className="row justify-content-center align-items-center mb-5">
          {/* Column for Image */}
          <div className="col-lg-4 text-center mb-4">
            <img src={MyImage} alt="About Me" className="about-pic" />
          </div>

          {/* Column for Description */}
          <div className="col-lg-8 about-text m-2">
            <h2 className="about-title">A Journey in Tech</h2>
            <p>
              I am a passionate Machine Learning Engineer with a double major in
              Computer Science and Mathematics.
            </p>
            <p>
              With over 3 years of experience in data analysis and machine
              learning projects, I thrive on tackling challenges, especially in
              natural language processing and computer vision.
            </p>
            <p>
              Combining creativity, mathematics, and programming, I am always
              eager to learn and grow in my field.
            </p>
            <p>
              Ever since I was young, I've been captivated by technology—drawn
              in by the incredible pace of innovation and a deep desire to
              tackle real-world challenges with creative solutions.
            </p>

            {/* Social Media Links */}
            <div className="social-links mt-4">
              <a
                href="https://www.linkedin.com/in/abhishek-amgain-04b642265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
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
        <div className="skills-section">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3 className="skills-title">Core Skills</h3>
              <ul className="skills-list">
                <li className="skill-item">Machine Learning Algorithms</li>
                <li className="skill-item">Data Analysis</li>
                <li className="skill-item">Computer Vision</li>
                <li className="skill-item">Natural Language Processing</li>
                <li className="skill-item">Data Visualization</li>
              </ul>
            </div>

            <div className="col-md-6 text-center">
              <h3 className="skills-title">Programming</h3>
              <ul className="skills-list">
                <li className="skill-item">Python/ Java/ JavaScript/ SQL</li>
                <li className="skill-item">TensorFlow/ Pytorch</li>
                <li className="skill-item">Numpy / Pandas</li>
                <li className="skill-item">
                  Scikit-Learn / Matplotlib/ Seaborn
                </li>
                <li className="skill-item">YOLO/ OpenCV</li>
                <li className="skill-item">React.JS/ Node.JS</li>
                <li className="skill-item">And many more...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
