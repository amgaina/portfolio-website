import React from "react";
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
    title: "Stock Price Pattern Prediction",
    description:
      "With a touch of nostalgia, this project uses advanced LSTM and RNN models to predict Google stock prices, achieving approximately 90% accuracy—just like predicting the future!",
    image: require("../Utils/google_stock_price_pattern_prediction.png"),
    link: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
    skills: ["Numpy, Tensorflow, LSTM, Scikit-Learn, Matplotlib, RNN"],
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
    title: "Credit Card Fraud Detection Model",
    description:
      "A cutting-edge model using the Isolation Forest algorithm to protect against fraud, achieving a remarkable 99.7% accuracy—a modern-day hero in finance.",
    image: require("../Utils/credit_card_fraud_detection.png"),
    link: "https://github.com/amgaina/Credit-Card-Fraud-Detection",
    skills: [
      "Python, Pandas, Isolation Forest, SciKitLearn, Seaborn, Matplotlib",
    ],
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
  return (
    <div className="projects-page nostalgic-bg" id="project">
      <h1 className="page-title mb-5">My Projects</h1>
      <div className="container projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
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
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
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
