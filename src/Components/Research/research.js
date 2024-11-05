import React from "react";
import "./research.css";

const researchProjects = [
  {
    title: "Louisiana Cancer Data Research",
    description:
      "Collaborating with Dr. Sreekumari on a data analytics project focusing on Louisiana cancer data (2016-2020), provided by LSU Health, New Orleans. Our goal is to uncover significant trends and insights that contribute to a better understanding of cancer in the region. Findings were presented at the Biomedical Research Conference at LSU Health Shreveport on November 1, 2024.",
    image: require("../Utils/cancer_data_research.png"),
    link: "https://www.abhishekamgain.com.np/#/blog/3",
    skills: [
      "Data Analytics, Python, Pandas, Visualization, Research Methodologies",
    ],
  },
  {
    title: "Subnetting Tutorial Website",
    description:
      "A research project in collaboration with Dr. Paul D Wiedemeier at ULM. This project led to the development of a website that serves as a comprehensive resource for learning subnetting concepts in computer networking. The site is designed to address student difficulties in mastering subnetting.",
    image: require("../Utils/subnetting_tutorial.png"),
    link: "https://github.com/amgaina/Subnetting-Tutorial",
    skills: [
      "HTML, CSS, JavaScript, Networking, Research, Website Development",
    ],
  },
];

const ResearchPage = () => {
  return (
    <div className="research-page" id="research">
      <h1 className="research-title mb-5">My Research</h1>
      <div className="container research-container">
        {researchProjects.map((project, index) => (
          <div key={index} className="project-card">
            {" "}
            {/* Change here for consistent card style */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              {" "}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="skills-used">
                <h3>Skills Used:</h3>
                <ul>
                  {project.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
