import "./Header.js.css";

function Header() {
    return (
        <header>
            <div class="logo-block">
                <div class="logo-section">
                    <img class="logo" src="./Data/logo.png" alt="Logo"></img>
                </div>
                <div class="title-section">
                    Linux Documentation
                </div>
                <div class="search-section">
                    <img class="search-icon" src="./Data/search.png" alt="Logo"></img>
                    <p>Search</p>
                </div>
            </div>

        </header>
    )
}

export default Header;