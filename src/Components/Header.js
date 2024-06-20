import "./Header.css";

export default function Header() {
    const onLogoClicked = () => {
        window.location.href = "/";
    };

    return (
        <header>
            <div className="logo-block">
                <div className="logo-section">
                    <img className="logo" src="./Data/logo.png" alt="Logo" onClick={onLogoClicked}></img>
                </div>
                <div className="title-section">
                    Linux Handbuch
                </div>
                <div className="search-section">
                    <input type="text" placeholder="Search"></input>
                    <img className="search-icon" src="./Data/search.png" alt="Search Icon"></img>
                </div>
            </div>
        </header>
    )
}
