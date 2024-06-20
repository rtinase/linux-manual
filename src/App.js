// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RoutesConfig from './routes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Router>
        <Header />
        <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={`content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Routes>
            {RoutesConfig()}
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
