import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onborading from './pages/Onboarding';
import Sign from './pages/Sign';
import Home from './pages/Home';
import CreatCount from './pages/CreateCount';

function App() {
  

  return (
    <div className='bodyApp'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Onborading />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/onb" element={<Onborading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/creat" element={<CreatCount />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
