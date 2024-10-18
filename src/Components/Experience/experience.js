import React from "react";
import "./experience.css";

const experiences = [
  {
    title: "Student Research Intern",
    company: "Louisiana Economic of Development",
    duration: "Oct 2023 - Present",
    description: [
      "Worked with peers on various image recognition project, contributing to a 20% improvement in object detection accuracy.",
      "Managed extensive datasets through cleaning, preprocessing, and feature engineering, ensuring high-quality inputs for model training and evaluation.",
      "Executed experiments to validate model performance, resulting in a 15% increase in sentiment analysis accuracy.",
      "Compiled detailed reports and created presentations to effectively communicate research progress and results to stakeholders.",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Data Preprocessing",
      "SpringBoot",
      "ReactJs",
      "React Native",
      "Data Analysis",
      "Microsoft Power App",
    ],
    image: require("../Utils/led.png"),
  },
  {
    title: "Data Analyst Intern",
    company: "Qatar Airways",
    duration: "May 2023 - August 2023",
    description: [
      "Developed and implemented data models to analyze airline operations, leading to a 15% improvement in decision-making processes and enhanced operational efficiency.",
      "Conducted exploratory data analysis (EDA) to identify trends in passenger behavior, flight schedules, and revenue performance, resulting in a 10% increase in revenue optimization.",
      "Created interactive dashboards and reports using Tableau and PowerBI, improving the ability to visualize key metrics and communicate findings to stakeholders.",
    ],
    skills: [
      "Tableau",
      "Alteryx",
      "Microsoft 365",
      "Data Analysis",
      "Data Manipulation",
    ],
    image: require("../Utils/qatar_airways.png"),
  },
  {
    title: "Tutor",
    company: "US Department of Education (TRIO Program)",
    duration: "Aug 2022 - Oct 2023",
    description: [
      "Tutored first-generation students at the TRIO program at ULM, which is one of the major programs run under the US Department of Education.",
      "Helped them build problem-solving and analytical skills.",
      "Organized in-person coding workshops at various high schools in the Monroe Area.",
    ],
    skills: [
      "Teaching",
      "Mentorship",
      "Workshop Organization",
      "Java",
      "Python",
      "Presentation Skills",
    ],
    image: require("../Utils/trio_program.png"),
  },
];

const ExperienceSection = () => {
  return (
    <div className="experience-section" id="experience">
      <h1 className="section-title mb-5">Experience</h1>
      <div className="container">
        <div className="row experience-row">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <img
                src={exp.image}
                alt={exp.company}
                className="experience-image m-2"
              />
              <div className="experience-info">
                <h2 is="experience-title">{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p className="duration">{exp.duration}</p>
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="skills-used">
                  <h4>Skills Used:</h4>
                  <ul>
                    {exp.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
