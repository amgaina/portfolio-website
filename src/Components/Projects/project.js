import React, { useState } from "react";
import "./project.css";

const projects = [
  {
    title: "House Price Prediction",
    description:
      "A heartfelt project that helps families find their dream homes by predicting house prices in Bangalore. It’s like bringing together dreams and reality.",
    image: require("../Utils/house_price_prediction.png"),
    link: "https://github.com/amgaina/House-Price-Prediction",
    skills: ["Python, Flask, Numpy, Scikit-Learn, Pandas, Bootstrap"],
  },
  {
    title: "Amazon Feedback Sentiment Analysis",
    description:
      "An NLP-based project that helps users understand customer sentiments on Amazon Echo products, classifying reviews as positive or negative to guide purchasing decisions.",
    image: require("../Utils/sentiment.png"),
    link: "https://github.com/amgaina/Amazon_Sentiment_Analysis",
    skills: [
      "Python, Flask, NLTK, XGBoost, MinMaxScaler, CountVectorizer, HTML, CSS",
    ],
  },
  {
    title: "Movie Recommender System",
    description:
      "Remember those cozy movie nights? This system recommends films based on your favorites, capturing the magic of storytelling through movie plots.",
    image: require("../Utils/movie_recommender_syste.png"),
    link: "https://github.com/amgaina/Movie-Recommender-System",
    skills: [
      "Python, TensorFlow, Scikit-Learn, Count-Vectorizer, Panda, Cosine Similarity",
    ],
  },
  {
    title: "Application Management System",
    description:
      "A user-friendly software that simplifies the application submission process at Emerging Scholars at ULM, reflecting our commitment to making dreams come true.",
    image: require("../Utils/application_submission.png"),
    link: "https://github.com/Georgey764/Grant-Application-Management-System?tab=readme-ov-file#using-app",
    skills: ["ReactJs, Java, Spring Boot, MySQL, SQL, AWS"],
  },
  {
    title: "Stock Price Pattern Prediction",
    description:
      "With a touch of nostalgia, this project uses advanced LSTM and RNN models to predict Google stock prices, achieving approximately 90% accuracy—just like predicting the future!",
    image: require("../Utils/google_stock_price_pattern_prediction.png"),
    link: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
    skills: ["Numpy, Tensorflow, LSTM, Scikit-Learn, Matplotlib, RNN"],
  },
  {
    title: "Handwritten Digit Classification",
    description:
      "A trip down memory lane! This project involves creating a neural network model that classifies handwritten digits from the famous MNIST dataset, achieving an impressive 98% accuracy.",
    image: require("../Utils/handwritten_digit_classification.png"),
    link: "https://github.com/amgaina/Hand-Written-Digit-Classification",
    skills: ["Python, Tensorflow, Keras, Matplotlib, Numpy, DNN"],
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDialog = (project) => {
    setSelectedProject(project);
  };

  const closeDialog = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page" id="project">
      <h1 className="page-title">My Projects</h1>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image fancy-hover"
                  onClick={() => openDialog(project)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog box with animation */}
      {selectedProject && (
        <div className="project-dialog">
          <div className="dialog-content slide-down">
            <button className="close-dialog" onClick={closeDialog}>
              ×
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="skills-used">
              <h3>Skills Used:</h3>
              <ul>
                {selectedProject.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
            <a
              href={selectedProject.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      )}

      <div className="github-link-container">
        <a
          href="https://github.com/amgaina"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
