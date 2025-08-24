import "/styles/navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
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
            <Link to="/" className="link">
                <div id="logo-container">
                    <div id="logo">
                        eM
                    </div>
                    {/* <p id="web-name">eMovieHub</p> */}
                </div>
            </Link>
            
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        </nav>
    )
}