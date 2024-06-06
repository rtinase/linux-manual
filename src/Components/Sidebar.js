import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLayerGroup, faDesktop, faCube, faBars, faMoon, faSun, faGlobe } from '@fortawesome/free-solid-svg-icons';
import content from '../content.json';
import './Sidebar.css';

const icons = {
  faHome: <FontAwesomeIcon icon={faHome} />,
  faLayerGroup: <FontAwesomeIcon icon={faLayerGroup} />,
  faDesktop: <FontAwesomeIcon icon={faDesktop} />,
  faCube: <FontAwesomeIcon icon={faCube} />
};

const Sidebar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    setMenuItems(content.hauptthemen);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'EN' ? 'DE' : 'EN');

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className={`menu-item ${item.unterthemen.length ? 'has-children' : ''}`}>
        <Link to={item.link}>
          {icons[item.icon]} {item.title}
        </Link>
        {item.unterthemen.length > 0 && (
          <div className="nested-menu">
            {renderMenuItems(item.unterthemen)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-logo">
        <Link to="/">
          <img src="/logo512.png" alt="Logo" />
        </Link>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {renderMenuItems(menuItems)}
      <div className="sidebar-controls">
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <button onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faGlobe} /> {language}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
