import React, { useState } from 'react';
import './Header.css'; // Assuming the CSS file is named Header.css

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const handleSearch = () => {
        // Add your search handling logic here
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const fetchSearchResults = (query) => {
        const getPages = () => {
            const context = require.context('../pages', true, /\.js$/);
            const keys = context.keys();
            const fileNames = keys.map((key) => key.replace('./', '').replace('.js', ''));
            return fileNames;
        };

        const allPages = getPages();
        const filteredResults = allPages.filter(page => page.toLowerCase().includes(query.toLowerCase()));
        return filteredResults.length > 0 ? filteredResults : ['No Result'];
    };

    const onLogoClicked = () => {
        window.location.href = "/";
    };
    return (
        <header>
            <div className="logo-block">
                <div className="logo-section">
                    <img className="logo" src="./Data/logo.png" alt="Logo" onClick={onLogoClicked}/>
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
                        onKeyPress={handleKeyPress}
                    />
                    <button className="find-button" onClick={handleSearch}>
                        <img className="search-icon" src="./Data/search.png" alt="Search Icon" />
                    </button>
                    {showDropdown && (
                        <ul className="search-dropdown">
                            {searchResults.map((result, index) => (
                                <li key={index} className="search-result">{result}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
