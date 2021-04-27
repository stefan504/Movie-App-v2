import React from 'react';

const TOP_RATED =
	'https://api.themoviedb.org/3/movie/top_rated?api_key=2e32f4bcb384192eb49d2c953c602420&language=en-US&page=1';
const FEATURED =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2e32f4bcb384192eb49d2c953c602420';
// const IMG_API = 'https://image.tmdb.org/t/p/w1290';
// const SEARCH_API =
// 	'https://api.themoviedb.org/3/search/movie?&api_key=2e32f4bcb384192eb49d2c953c602420&query=';
const UPCOMING_API =
	'https://api.themoviedb.org/3/movie/upcoming?api_key=2e32f4bcb384192eb49d2c953c602420&language=en-US&page=1';
function Navigation({ getMovies }) {
	return (
		<>
			<h2 className="h2" onClick={() => getMovies(FEATURED)}>
				Popular
			</h2>
			<h2 className="h2" onClick={() => getMovies(TOP_RATED)}>
				Top rated
			</h2>
			<h2 className="h2" onClick={() => getMovies(UPCOMING_API)}>
				Upcoming
			</h2>
		</>
	);
}

export default Navigation;
