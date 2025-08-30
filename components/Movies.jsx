import '../styles/movies.css';
import { getMovies } from '../fetchMovies';
import { useSearchParams } from 'react-router-dom';
export default function Movies() {
    const [searchParams, setSearchParam] = useSearchParams({genre: 'All'})
    const activeGenre = searchParams.get('genre')
    const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance']
    async function getMoviesInfo() {
        const result = await getMovies()
        console.log(result)
    }
    getMoviesInfo()
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
            <div id='cards-container'>
                <div className="card">
                    {/* <img src="" alt="moviePoster" /> */}

                </div>
            </div>
        </div>
    );
}