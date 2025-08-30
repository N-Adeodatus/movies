export async function getMovies() {

    const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '80c50463f1mshe288ac661da63a9p1d6adcjsn6ea75bfc13a4',
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };
    
    try {
        let result
        if(!localStorage.getItem('moviesDetails')) {
            console.log('movies fetched')
            const response = await fetch(url, options);
            result = await response.json(); 
            localStorage.setItem('moviesDetails', JSON.stringify(result))
            return result
        }
        console.log('got movies from local host')
        result = JSON.parse(localStorage.getItem('moviesDetails'))
        return result

    } catch (error) {
        console.error(error);
    }
}