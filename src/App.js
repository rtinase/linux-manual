// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './routes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Header />
      <Router>
          <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className={`content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Routes>
              {RoutesConfig()}
            </Routes>
          </div>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
