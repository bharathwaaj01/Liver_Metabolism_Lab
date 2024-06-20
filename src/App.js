import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/Main/About';
import Careers from './Component/Main/Careers';
import Team from './Component/Main/Team';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
