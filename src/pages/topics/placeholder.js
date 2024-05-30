import React from 'react';
import './Layout.css'; // CSS-Datei für das Styling

// Platzhalter-Komponenten für Author und Date
const Author = () => <span>Author</span>;
const Date = () => <span>Date</span>;

const Layout = () => {
  return (
    <div className="container">
      <div className="navbar">
        <h2>h2</h2>
        <h3>h3</h3>
        <h2>h2</h2>
        <h3>h3</h3>
        <h3>h3</h3>
        <h2>h2</h2>
        <h3>h3</h3>
        <h3>h3</h3>
      </div>
      <div className="main-content">
        <div className="title">Titel</div>
        <div className="content-line"></div>
        <div className="content-line"></div>
        <div className="content-line"></div>
        <div className="author">Written by <Author /> <Date /></div>
      </div>
    </div>
  );
};

export default Layout;
