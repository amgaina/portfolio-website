import { HashRouter, Routes, Route } from "react-router-dom";
import OpenPage from "./Components/OpenPage/home.js";
import Paper from "./Components/Paper/paper.js";
import Blog from "./Components/Blog/blog.js";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<OpenPage />} />
          <Route path="/paper" element={<Paper />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
