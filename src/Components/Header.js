import React, { useState } from 'react';
import './Header.css'; // Assuming the CSS file is named Header.css
import { useNavigate } from "react-router-dom";

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            const results = fetchSearchResults(query);
            setSearchResults(results);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleResultClick();
        }
    };

    const getPages = () => {
        const context = require.context('../pages', true, /\.js$/);
        const keys = context.keys();
        const fileNames = keys.map((key) => {
            // Extract only the file name from the path
            const parts = key.split('/');
            const fileName = parts[parts.length - 1].replace('.js', '');
            return fileName;
        });
        const uniqueFileNames = [...new Set(fileNames)];
        return uniqueFileNames;
    };

    const fetchSearchResults = (query) => {
        const allPages = getPages();
        const filteredResults = allPages.filter(page => page.toLowerCase().includes(query.toLowerCase()));
        return filteredResults.length > 0 ? filteredResults : ['No Result'];
    };

    const onLogoClicked = () => {
        window.location.href = "/";
    };

    const handleResultClick = (page) => {
        const context = require.context('../pages', true, /\.js$/);
        const keys = context.keys();
        const getKey = (key) => {
            const parts = key.split('/');
            const fileName = parts[parts.length - 1].replace('.js', '');
            return fileName;
        }
        if (page === "Home") {
            navigate("/");
        }
        else {
            keys.forEach(key => {
                if (getKey(key) === page) {
                    navigate(`${key.toLowerCase().replace('.js', '')}`);
                }
            });
        }
    };

    return (
        <header>
            <div className="logo-block">
                <div className="logo-section">
                    <img className="logo" src="./Data/logo.png" alt="Logo" onClick={onLogoClicked} />
                </div>
                <div className="title-section">
                    Linux Documentation
                </div>
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button className="find-button" onClick={handleResultClick}>
                    </button>
                    {showDropdown && (
                        <ul className="search-dropdown">
                            {searchResults.map((result, index) => (
                                <li key={index} className="search-result" onClick={() => handleResultClick(result)}>{result}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
