import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenPage from "./Components/OpenPage/home.js";
import Paper from "./Components/Paper/paper.js";
import Blog from "./Components/Blog/blog.js";
import "./App.css";

function App() {
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
