import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onborading from './pages/onboarding';
import Sign from './pages/Sign';

function App() {
  

  return (
    <div className='bodyApp'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Onborading />} />
        <Route path="/login" element={<Sign />} />
        <Route path="contact" element={<Sign />} />
        <Route path="*" element={<Sign />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
