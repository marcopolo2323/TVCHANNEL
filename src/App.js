// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Presentacion from './components/Presentacion';
import Login from './login/login';
import './App.css';
import Centro from './Components2/centro';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Centro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
