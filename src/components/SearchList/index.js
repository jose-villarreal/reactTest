import React from 'react';
import { Link } from "react-router-dom";

export const SearchList = props => {

	const {items} = props;

	return (

		<ul className="search-list">
			{
				items.map((item, index) => {

					const { image, text, url } = item;

					return (
						<li key={index} className='search-list-item'>

							<Link to={ url } className='search-list-link'>
								{(image && <img className="card-image card-image-sm l-float-left" src={image.url} alt={image.alt}></img>)}
								{text}
							</Link>

						</li>
					);
				})
			}
		</ul>

	);

};