import "/styles/navbar.css"
import { useState } from "react"
import menuIcon from "../images/menu.svg"
import closeIcon from "../images/close.svg"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Implement search logic here
    };

    return(
        <nav id="navbar">
            <div id="logo-container">
                <div id="logo">
                    eM
                </div>
                <p id="web-name">eMovieHub</p>
            </div>
            
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>

            <div id="menu-icon-container">
                <img 
                    src={isMenuOpen ? closeIcon : menuIcon} 
                    alt={isMenuOpen ? "close menu" : "open menu"} 
                    id="menu-icon"
                    onClick={toggleMenu}
                />
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                </ul>
            </div>
        </nav>
    )
}