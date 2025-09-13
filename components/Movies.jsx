import '../styles/movies.css';
import { getMovies } from '../fetchMovies';
import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import star from '../images/yello-star.svg';
import time from '../images/time.svg';
export default function Movies() {
    const [searchParams, setSearchParam] = useSearchParams({genre: 'All', page: '1'})
    const activeGenre = searchParams.get('genre')
    const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance']
    const [moviesInfo, setMoviesInfo] = useState([])

    useEffect(() => {
        async function getData() {
            const results = await getMovies()
            setMoviesInfo(results)
            console.log('movies Info', results)
        }
        getData()
    },[])
    const genre = searchParams.get('genre')
    const filterGenre = moviesInfo.filter( movie => movie.genre.includes(genre) || genre === 'All')
    const numberPerPage = 15
    const numberOfPages = Math.ceil(filterGenre.length / numberPerPage)
    const currentPage = Number(searchParams.get("page")) || 1
    const startIndex = (currentPage - 1) * numberPerPage
    const endIndex = startIndex + numberPerPage
    const paginatedMovies = filterGenre.slice(startIndex, endIndex)
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
                    paginatedMovies.filter( film => film).map((movie, index) => (
                        <Link to={`/movies/${movie.imdbid}`} state={movie} className='card-link'>
                        <div className="card" key={index}>
                            <div className="HD-badge">
                                HD
                            </div>
                            <div className='image-container'>
                                <img src={movie.image} alt="moviePoster" className='moviePoster' />
                            </div>
                            <div className="movie-poster-details">
                                <p className="movie-name">{movie.title}</p>
                                <div className="details-container">
                                    <div className="duration-container">
                                        <img src={time} alt="time-icon" className="time-icon" />
                                        <p className='duration-text'>{movie.year}</p>
                                    </div>
                                    <div className="rating-container">
                                        <img src={star} alt="star icon" className='yellow-star-icon' />
                                        <p className='rating-text'>{movie.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
                </div>
            }
            {/* Pagination */}
            <div id="pagination">
                { numberOfPages > 1 &&
                /*Create the number of buttons based on the the number of pages*/
                Array.from({length: numberOfPages}, (_, index) => (
                    <button
                        key={index}
                        className={`page-btn ${Number(searchParams.get("page") || 1) === index + 1 ? 'active' : ''}`}
                        onClick={() => setSearchParam({genre: activeGenre, page: index + 1})}
                    >
                        {index + 1}
                    </button>)
                )
                }

            </div>
        </div>
    );
}