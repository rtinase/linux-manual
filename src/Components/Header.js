import React, { useState } from 'react';
import './Header.css';
import { useNavigate, Link } from "react-router-dom";

function Header() {
    var [searchQuery, setSearchQuery] = useState('');
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
        }
        else {
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

    const handleResultClick = (page) => {
        setSearchQuery("");
        setShowDropdown(false);
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

    const onDarkmodeClicked = () => {
        document.documentElement.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header>
            <div className="logo-block">
                <div className="logo-section">
                    <Link to="/">
                        <img className="logo" src="./Data/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="title-section">
                    Linux Handbuch
                </div>
                <div class="right-position">
                    <button onClick={onDarkmodeClicked} className="toggle_darkmode">Toggle Darkmode</button>
                    <div className="search-section">
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        {showDropdown && (
                            <ul className="search-dropdown">
                                {searchResults.map((result, index) => (
                                    <li key={index} className="search-result" onClick={() => handleResultClick(result)}>{result}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;