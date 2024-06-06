// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RoutesConfig from './routes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={`content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Routes>
            {RoutesConfig()}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

