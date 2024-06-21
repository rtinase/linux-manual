// src/Components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLayerGroup, faDesktop, faCube, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import content from '../content.json';
import './Sidebar.css';

const icons = {
  faHome: <FontAwesomeIcon icon={faHome} />,
  faLayerGroup: <FontAwesomeIcon icon={faLayerGroup} />,
  faDesktop: <FontAwesomeIcon icon={faDesktop} />,
  faCube: <FontAwesomeIcon icon={faCube} />
};

const Sidebar = ({ isOpen }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [openTopics, setOpenTopics] = useState({});

  useEffect(() => {
    setMenuItems(content.hauptthemen);
  }, []);

  const toggleTopic = (index) => {
    setOpenTopics(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const renderMenuItems = (items, parentIndex = '') => {
    return items.map((item, index) => {
      const currentIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
      const isOpen = openTopics[currentIndex];
      return (
        <div key={currentIndex} className={`menu-item ${item.unterthemen.length ? 'has-children' : ''}`}>
          <div className="menu-item-title" onClick={() => item.unterthemen.length && toggleTopic(currentIndex)}>
            <Link to={item.link}>
              {icons[item.icon]} {item.title}
            </Link>
            {item.unterthemen.length > 0 && (
              <FontAwesomeIcon className="toggle-icon" icon={isOpen ? faChevronDown : faChevronRight} />
            )}
          </div>
          {isOpen && item.unterthemen.length > 0 && (
            <div className="nested-menu">
              {renderMenuItems(item.unterthemen, currentIndex)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="placeholder"></div>
      {renderMenuItems(menuItems)}
    </div>
  );
};

export default Sidebar;
