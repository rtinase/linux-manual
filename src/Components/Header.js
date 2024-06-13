import React, { useState } from 'react';
import './Header.js.css';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            // Fetch or filter search results here
            const results = fetchSearchResults(query);
            setSearchResults(results);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleSearch = () => {

        // You can replace this with an API call or other logic
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const fetchSearchResults = (query) => {
        // Mock function to simulate fetching search results
        const pages = [
            'Introduction to Linux',
            'Linux Installation Guide',
            'Basic Linux Commands',
            'Linux File System',
            'Advanced Linux Networking'
        ];

        const filteredResults = pages.filter(page => page.toLowerCase().includes(query.toLowerCase()));
        return filteredResults.length > 0 ? filteredResults : ['No Result'];
    };

    return (
        <header>
            <div className="logo-block">
                <div className="logo-section">
                    <img className="logo" src="./Data/logo.png" alt="Logo" />
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
