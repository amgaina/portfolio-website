import React from "react";
import About from "../About/about.js";
import Education from "../Education/education.js";
import Project from "../Projects/project.js";
import Research from "../Research/research.js";
import Experience from "../Experience/experience.js";
import Homepage from "../Homepage/home.js";
import Contact from "../Contact/contact.js";
const HomeSite = () => {
  return (
    <div>
      <Homepage />
      <About />
      <Education />
      <Project />
      <Research />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomeSite;
