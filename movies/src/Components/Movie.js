import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

function Movie({
	addToFavs,
	title,
	poster_path,
	overview,
	vote_average,
	release_date,
	movie,
	openModal,
}) {
	return (
		<div className="movie">
			<img
				src={
					poster_path
						? IMG_API + poster_path
						: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'
				}
				alt={title}
			/>

			<div className="movie-info">
				<h3>{title}</h3>
				<span>
					{vote_average}
					<i className="fas fa-star"></i>
				</span>
			</div>
			<p className="release-date">Year of release: {release_date}</p>

			<div className="movie-overview">
				<h2>Overview:</h2>
				<p>{overview}</p>
			</div>
			<h2 className="favourite" onClick={() => addToFavs(movie)}>
				💛
			</h2>
		</div>
	);
}

export default Movie;
