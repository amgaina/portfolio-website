import React from "react";
import "./education.css";
import oxfordLogo from "../Utils/oxfordLogo.png";
import ulmLogo from "../Utils/ulmLogo.png";

function Education() {
  return (
    <div className="education-section" id="education">
      <h1 className="contact-page-title">Education</h1>
      <div className="container">
        <div className="education-item row">
          <div className="col-md-4 text-center">
            <img
              src={oxfordLogo}
              alt="Oxford College Logo"
              className="education-logo"
            />
          </div>
          <div className="col-md-8">
            <h2 className="institution">
              Oxford College of Engineering and Management
            </h2>
            <p>Completed High School (2019-2021)</p>
            <p>Address: Gaindakot - 02, Nepal</p>
            <p>
              Learned skills: QBASIC, C, HTML, CSS, JavaScript, Microsoft Office
              Suite
            </p>
          </div>
        </div>

        <div className="education-item row">
          <div className="col-md-4 text-center">
            <img src={ulmLogo} alt="ULM Logo" className="education-logo" />
          </div>
          <div className="col-md-8">
            <h2 className="institution">University of Louisiana at Monroe</h2>
            <p>Pursuing Undergraduate Degree (2022 - current)</p>
            <ul>
              <li>AI and Machine Learning</li>
              <li>Mathematics and Statistics</li>
              <li>Software Engineering</li>
            </ul>
            <div className="university-experiences mt-3">
              <h4>Experiences:</h4>

              <div className="experience-item">
                <h5>Data Analytics Intern</h5>
                <p>
                  <strong>Timeline:</strong> May 2024 - Present
                </p>
                <p>
                  Collaborated with Dr. Sreekumari on a data analytics research
                  project focused on Louisiana cancer data from 2016-2020,
                  provided by LSU Health, New Orleans. Our research aims to
                  uncover significant trends and insights that can contribute to
                  better understanding and addressing cancer in the region. We
                  are scheduled to present our findings at the Biomedical
                  Research Conference at LSU Shreveport on November 1, 2024.
                </p>
              </div>

              <div className="experience-item">
                <h5>Full-stack Developer</h5>
                <p>
                  Jan 2024 to Apr 2024: Collaborated with Dr. Lon Smith and
                  another programmer to develop a custom web application for the
                  ULM Emerging Scholar Department. The project aimed to
                  streamline the application submission process, making it more
                  efficient for students and faculty. Built using Java (Spring),
                  React, Bootstrap, and AWS.
                </p>
              </div>

              <div className="experience-item">
                <h5>Web Development Intern</h5>
                <p>
                  Aug 2023 to Jan 2024: Developed a web app for Monroe
                  Convention Visitor's Bureau.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
