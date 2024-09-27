import React from 'react';
import './paper.css';

const PaperSection = () => {
  return (
    <div className="paper-section" id="papers">
      <h1 className="section-title">Research Paper Coming Soon!</h1>
      <div className="paper-content">
        <p className="description">
          I am currently in the process of writing a research paper that delves into advanced topics in machine learning. 
          This research aims to contribute valuable insights into the field of AI and Machine Learning.
        </p>
        <p className="note">
          Stay tuned! The website will be updated with the paper once it's completed.
        </p>
      </div>
      <div className="illustration">
        <img src={require('../Utils/research_paper.png')} alt="Research Illustration" />
      </div>
    </div>
  );
};

export default PaperSection;
