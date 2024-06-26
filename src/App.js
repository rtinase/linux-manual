import React, { useState, useEffect } from 'react';
import './App.css';
import './Components/Sidebar.css'; // Import Sidebar CSS here
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RoutesConfig from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <button className="toggle-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          <Routes>
            {RoutesConfig()}
          </Routes>
        </div>
        <button
          className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`}
          onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
