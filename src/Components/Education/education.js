import React, { useEffect, useRef, useState } from "react";
import "./education.css";
import oxfordLogo from "../Utils/oxfordLogo.png";
import ulmLogo from "../Utils/ulmLogo.png";
import "animate.css";

function Education() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array

  return (
    <div
      ref={sectionRef}
      className="education-section container mt-5"
      id="education"
    >
      <h1 className={`text-center mb-5}`} id = "education-header">Education</h1>

      <div
        className={`education-item mt-5 mb-5 row ${
          inView ? "animate__animated animate__fadeInLeft" : ""
        }`}
      >
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

      <div
        className={`education-item mb-5 row ${
          inView ? "animate__animated animate__fadeInRight" : ""
        }`}
      >
        <div className="col-md-4 text-center">
          <img src={ulmLogo} alt="ULM Logo" className="education-logo" />
        </div>
        <div className="col-md-8">
          <h2 className="institution">University of Louisiana at Monroe</h2>
          <p>Pursuing Undergraduate Degree (2022 - current)</p>
          <ul className="text-black">
            <li> AI and Machine Learning</li>
            <li>Software Engineering</li>
          </ul>
          <div className="university-experiences mt-3">
            <h4>Experiences:</h4>

            <div
              className={`experience-item mb-4 ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <h5>Data Analytics Intern</h5>
              <p>
                <strong>Timeline:</strong> May 2024 - Present
              </p>
              <p>
                Collaborating with Dr. Sreekumari on a data analytics research
                project focused on Louisiana cancer data from 2016-2020,
                provided by LSU Health, New Orleans. Our research aims to
                uncover significant trends and insights that can contribute to
                better understanding and addressing cancer in the region. We are
                scheduled to present our findings at the Biomedical Research
                Conference at LSU Shreveport on November 1, 2024.
              </p>
            </div>

            <div
              className={`experience-item mb-4 ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <h5>Full-stack Developer</h5>
              <p>
                Jan 2024 to Apr 2024: Collaborated with Dr. Lon Smith and
                another programmer to develop a custom web application for the
                ULM Emerging Scholar Department. The project aimed to streamline
                the application submission process, making it more efficient for
                students and faculty. Built using Java (Spring), React,
                Bootstrap, and AWS.
              </p>
              <p>
                <strong>Skills:</strong> Java, React.js, Bootstrap, Spring, AWS
              </p>
            </div>

            <div
              className={`experience-item mb-4 ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              <h5>Web Development Intern</h5>
              <p>
                Aug 2023 to Jan 2024: Worked on web project to develop web
                application for the Monroe Convention Visitor's Bureau.
              </p>
              <p>
                <strong>Skills:</strong> HTML, CSS, Google Script, Leaflet,
                JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
