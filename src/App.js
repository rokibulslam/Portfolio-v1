import Sidebar from "./Components/Sidebar/Sidebar";

import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Services />} />
            <Route path="/analytics" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
