import '../styles/movies.css';
import { getMovies } from '../fetchMovies';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import star from '../images/yello-star.svg';
import time from '../images/time.svg';
export default function Movies() {
    const [searchParams, setSearchParam] = useSearchParams({genre: 'All'})
    const activeGenre = searchParams.get('genre')
    const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance']
    const [moviesInfo, setMoviesInfo] = useState([])

    useEffect(() => {
        async function getData() {
            const {results} = await getMovies()
            setMoviesInfo(results)
            console.log('movies Info', results)
        }
        getData()
    },[])


    return (
        <div id='movies-page-container'>
            <h1 id='title'>Trending Movies</h1>
            <p>Discover the most popular movies.</p>
            <div id='genres-container'>
                {
                    genres.map((genre, index) => (
                        <button 
                            key={index} 
                            className={`genre-btn ${activeGenre === genre ? 'active' : ''}`}
                            onClick={() => setSearchParam({genre: genre})}
                        >{genre}</button>
                    )
                    )
                }
            </div>
            { moviesInfo.length !== 0 &&
            <div id='cards-container'>
                {
                    moviesInfo.map((movie, index) => (
                        <div className="card">
                            <div className="HD-badge">
                                HD
                            </div>
                            <div className='image-container'>
                                <img src={movie.primaryImage} alt="moviePoster" className='moviePoster' />
                            </div>
                            <div className="movie-poster-details">
                                <p className="movie-name">{movie.primaryTitle}</p>
                                <div className="details-container">
                                    <div className="duration-container">
                                        <img src={time} alt="time-icon" className="time-icon" />
                                        <p className='duration-text'>{movie.runtimeMinutes} min</p>
                                    </div>
                                    <div className="rating-container">
                                        <img src={star} alt="star icon" className='yellow-star-icon' />
                                        <p className='rating-text'>{movie.averageRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            }
        </div>
    );
}