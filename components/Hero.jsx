import "/styles/hero.css";
import { Link } from "react-router-dom";
import trending from "../images/trending.svg";
import star from "../images/star.svg";
import play from "../images/play.svg";

export default function Hero() {
  return (
    <div className="hero">
        
        <div id="trending">
            <img src={trending} alt="trending" id="trending-image" />
            <p>Trending Movies & Shows</p>
        </div>
        <h1 id="home-header">Find Movies <span>Online</span></h1>
        <p>Welcome to Movie Hub. This is your go-to place for movie information. Find out what's trending and popular right now. Get movie summaries, release dates, and ratings. Learn about the cast and crew of each film. Discover movies by genre, year, or popularity. Stay updated and explore your favorite titles easily!</p>
        <div id="home-buttons">
            <Link to="/movies" className="link">
                <button className="to-movies-btn">
                <img id="play" className="btn-icon" src={play} alt="" />
                Go To Movies</button>
            </Link>
            <Link to="/favorites" className="link">
                <button className="browse-btn">
                    <img src={star} alt="star-icon" className="btn-icon" />
                    Browse Favorites
                </button>
            </Link>
        </div>
        <div className="stats-container">
            <div className="stat-movies">
                <h2>10K+</h2>
                <p>Movies</p>
            </div>
            <div className="vertical-line"></div>
            <div className="stat-reviews">
                <h2>5K+</h2>
                <p>Reviews</p>
            </div>
            <div className="vertical-line"></div>
            <div className="stat-directors">
                <h2>500+</h2>
                <p>Directors</p>
            </div>
        </div>
    </div>
  );
}