import Sidebar from "./Components/Sidebar/Sidebar";

import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Services />} />
            <Route path="/analytics" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio /> } />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
