import React from 'react';

const Favourites = ({ favourites }) => {
	const IMG_API = 'https://image.tmdb.org/t/p/w1280';

	console.log(favourites);
	const { title } = favourites;
	return (
		<>
			<div className="section-title">Your favourite movies</div>
			<div className="favourites-container">
				{favourites.map((movie) => {
					return (
						<div key={movie.id} className="favourite-movie">
							<img
								src={
									movie.poster_path
										? IMG_API + movie.poster_path
										: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80'
								}
								alt={title}
							/>

							<div className="movie-info">
								<h3>{movie.title}</h3>
								<span>
									{movie.vote_average}
									<i className="fas fa-star"></i>
								</span>
							</div>
							<p className="release-date">
								Year of release: {movie.release_date}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Favourites;
