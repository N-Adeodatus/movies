import "/styles/navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import menuIcon from "../images/menu.svg"
import closeIcon from "../images/close.svg"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchIsFocused, setSearchIsFocused] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Implement search logic here
    };
    console.log(localStorage.getItem('moviesDetails'))
    const filteredMovies = searchQuery
        ? JSON.parse(localStorage.getItem('moviesDetails')).filter((movie, index) =>  movie.title &&
            movie.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        : []
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

            <ul id="ls-nav-bar">
                <li><Link to="/" className="link nav-link">Home</Link></li>
                <li><Link to="/movies" className="link nav-link">Movies</Link></li>
                <li><Link to="/about" className="link nav-link">About</Link></li>
                <li><Link to="/favorites" className="link nav-link">Favorites</Link></li>
            </ul>
            
            <div id='search-content'>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-input"
                        onFocus={() => setSearchIsFocused(true)}
                        onBlur={() => setTimeout(() => setSearchIsFocused(false), 200)}
                    />
                </div>
                {
                    searchQuery && searchIsFocused &&
                    <div className="search-results">
                        {filteredMovies.length > 0 ?
                        filteredMovies.map((movie, index) => (
                            <Link to={`/movies/${movie.imdbid}`} state={movie} className="link" key={index} onClick={() => setSearchQuery('')}>
                                <div className="movie-search-card">
                                    <div className="search-image-container">
                                        <img src={movie.image} alt="" />
                                    </div>
                                    <div className="name-container">
                                        <p>{movie.title}</p>
                                    </div>
                                </div>
                            </Link>
                        )) : ''
                    }
                    </div>
                    
                }
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