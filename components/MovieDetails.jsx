import "../styles/movieDetails.css"
import { useParams, useLocation, Link } from "react-router-dom"
import yellowStar from "../images/yello-star.svg"
export default function MovieDetails() {
    const parameters = useParams()
    const location = useLocation()
    console.log('parameters', parameters)
    console.log('location', location)
    return (
        <div id="moviedetails">
            {/* back to all movies button */}
            <Link 
            to=".."
            relative="path"
            >
                <button id="back-button">
                    Back to all movies
                </button>
            </Link>
            <main id="movie-details-main-container">
                <div id="movie-poster-container">
                    <img src={location.state.image} alt="movie-poster" id="movie-poster" />
                </div>
                <div id="movie-info-container">
                    <h1 id="movie-title">{location.state.title}</h1>
                    <p id="description-title">Description</p>
                    <p id="movie-description">{location.state.description}</p>
                    <p id="movie-genres">Genre: <span>{location.state.genre.join(', ')}</span></p>
                    <div id="rating">
                        <img src={yellowStar} alt="star" id="yello-star-icon" />
                        <p id="movie-rating">{location.state.rating}</p>
                    </div>
                </div>
            </main>
        </div>
    )
}