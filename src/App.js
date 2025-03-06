import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import CaseStudies from './pages/casestudies';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/case-studies" element={<CaseStudies />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
