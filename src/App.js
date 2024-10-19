import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import OpenPage from "./Components/OpenPage/home.js";
import Paper from "./Components/Paper/paper.js";
import Blog from "./Components/Blog/BlogPage.js";
import BlogDetail from "./Components/Blog/BlogDetail.js";
import "./App.css";
import "./Components/OpenPage/loading.css";

// Loading component
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

// Main App component
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the app has been loaded before
    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");

    if (!hasLoadedBefore) {
      // If this is the first time, show the loading screen
      setLoading(true);

      // Set a timeout to hide the loading screen after 3 seconds
      const timer = setTimeout(() => {
        setLoading(false);
        // Set a flag in localStorage to indicate the app has loaded
        localStorage.setItem("hasLoadedBefore", "true");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, []);

  return (
    <HashRouter>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<OpenPage />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
