import React from 'react';
import './Layout.css';

const Placeholder = () => {
    const title = "Titel";  // Set the title here

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">{title}</h1>
                <div className="info">
                    <p>Info line 1</p>
                    <p>Info line 2</p>
                    <p>Info line 3</p>
                </div>
                <div className="author">
                    Written by <span className="author-name">Test</span> <span className="date">30.05.2024</span>
                </div>
            </div>
        </div>
    );
};

export default Placeholder;
