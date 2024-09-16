import './App.css';
import Home from "./Components/Homepage/home.js"
import Education from './Components/Education/education.js';
import Project from './Components/Projects/project.js'
function App() {
  return (
    <div className="App">
      <Home/>
      <Education/>
      <Project/>
    </div>
  );
}

export default App;
