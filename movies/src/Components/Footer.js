import React from 'react';

function Footer() {
	return (
		<div className="footer-container">
			<i id="star" className="fas fa-star">
				<span className="white">Movie</span>
			</i>
			<div className="logo">
				<h3>TMDb API implementation</h3>
			</div>
			<div>
				<h4>by: Stefan Ilic</h4>
			</div>
			<p>&#169; All copyrights reserved.</p>
		</div>
	);
}

export default Footer;
