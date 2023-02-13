import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onborading from './pages/onboarding';
import Sign from './pages/Sign';
import Home from './pages/home';

function App() {
  

  return (
    <div className='bodyApp'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Onborading />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/onb" element={<Onborading />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
