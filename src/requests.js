const API_KEY="f4526ed1687913ca02e552a2c4265208";


const requests = {

fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,

fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,

fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,

fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,

fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,

fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,

fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,

fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,

fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,

fetchMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,


}

export default requests;