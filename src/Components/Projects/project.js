import React from "react";
import "./project.css";

const projects = [
  {
    title: "House Price Prediction",
    description:
      "A Flask-based web application for predicting house prices in the Bangalore area.",
    image: require("../Utils/house_price_prediction.png"),
    link: "https://github.com/amgaina/House-Price-Prediction",
    skills: ["Python, Flask, Numpy, Scikit-Learn, Pandas, Bootstrap"],
  },
  {
    title: "Stock Price Pattern Prediction",
    description:
      "Implementation of a Long Short-Term Memory (LSTM) and Recurrent Neural Network (RNN) model to predict Google stock prices that achieves an accuracy of approximately 90% accuracy.",
    image: require("../Utils/google_stock_price_pattern_prediction.png"),
    link: "https://github.com/amgaina/Google_Stock_Price_Pattern_Prediction",
    skills: ["Numpy, Tensorflow, LSTM, Scikit-Learn, Matplotlib, RNN"],
  },
  {
    title: "Movie Recommender System",
    description:
      "The system recommends movies based on a given movie title by analyzing the similarity between movie plots.",
    image: require("../Utils/movie_recommender_syste.png"),
    link: "https://github.com/amgaina/Movie-Recommender-System",
    skills: [
      "Python, TensorFlow, Scikit-Learn, Count-Vectorizer, Panda, Cosine Similarity",
    ],
  },
  {
    title: "Application Management System",
    description:
      "A software made for the application submission process at Emerging Scholars at ULM.",
    image: require("../Utils/application_submission.png"),
    link: "https://github.com/Georgey764/Grant-Application-Management-System?tab=readme-ov-file#using-app",
    skills: ["ReactJs, Java, Spring Boot, MySQL, SQL, AWS"],
  },
  {
    title: "Credit Card Fraud Detection Model",
    description:
      "A credit card fraud detection model using the Isolation Forest algorithm under the umbrella of anomaly detection. The model is designed to identify fraudulent transactions with a high accuracy of 99.7%.",
    image: require("../Utils/credit_card_fraud_detection.png"),
    link: "https://github.com/amgaina/Credit-Card-Fraud-Detection",
    skills: [
      "Python, Pandas, Isolation Forest, SciKitLearn, Seaborn, Matplotlib",
    ],
  },
  {
    title: "Handwritten Digit Classification",
    description:
      "Created a neural network model to classify handwritten digits from the famous MNIST dataset. The model was developed using TensorFlow and Keras and achieved an accuracy of 98% on the test data.",
    image: require("../Utils/handwritten_digit_classification.png"),
    link: "https://github.com/amgaina/Hand-Written-Digit-Classification",
    skills: ["Python, Tensorflow, Keras, Matplotlib, Numpy, DNN"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page" id="project">
      <h1 className="page-title mb-5">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card m-3">
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
