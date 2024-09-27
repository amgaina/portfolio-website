import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenPage from "./Components/OpenPage/home.js";
import Paper from "./Components/Paper/paper.js";
import Blog from "./Components/Blog/blog.js";
import "./App.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OpenPage />} />
          <Route path="/paper" element={<Paper />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
