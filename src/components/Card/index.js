import React from 'react';
import { Link } from "react-router-dom";

export const Card = (props) => {

	const { title, image, tag, url } = props;

	console.log('asdasdasda');

	return (

		<Link to={ url } onClick={e => e.stopPropagation()}>

			<article className="card l-text-center">

				<header>

					{ image ? (
						<img className="card-image l-align-center" src={image.url} alt={image.alt}></img>
					): '' }
					<h2 className="card-title">
						{title}
					</h2>

					{ tag ? (
						<p className="tag">
							{tag}
						</p>
					) : '' }

				</header>
			</article>

		</Link>
		
	);
};