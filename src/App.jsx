import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ExpertSystem from './pages/ExpertSystem';
import About from './pages/About';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert-system" element={<ExpertSystem />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
