import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './styles/global.css';
import Home from "./Pages/Home";
import Alphabetic from "./Pages/Alphabetic"; 
import Numeric from "./Pages/Numeric"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alphabetic" element={<Alphabetic />} />
        <Route path="/Numeric" element={<Numeric />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
