import React, { useState, useEffect } from 'react';

import Movie from './Components/Movie';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const FEATURED =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2e32f4bcb384192eb49d2c953c602420';
// const IMG_API = 'https://image.tmdb.org/t/p/w1290';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?&api_key=2e32f4bcb384192eb49d2c953c602420&query=';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	//    GET MOVIE DATA FUNCTION
	const getMovies = (API) => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	};

	// FEATURED MOVIES ON LOAD
	useEffect(() => {
		getMovies(FEATURED);
	}, []);

	// ON SUBMIT GET SEARCH TERM AND LOOK FOR MOVIE OF THAT NAME,THEN DISPLAY
	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm);
			setSearchTerm('');
		}
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header>
				<div className="nav">
					<i id="star" className="fas fa-star">
						<span className="white">Movie</span>
					</i>
					<Navigation getMovies={getMovies} />
				</div>
				<form onSubmit={handleOnSubmit} className="form">
					<input
						onChange={handleChange}
						value={searchTerm}
						type="search"
						className="search"
						placeholder="Search"
					/>
				</form>
			</header>
			<div className="movie-container">
				{movies.map((movie) => (
					<Movie {...movie} key={movie.id} />
				))}
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default App;