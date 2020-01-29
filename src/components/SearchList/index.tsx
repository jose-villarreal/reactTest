import React from 'react';
import { Link } from "react-router-dom";

interface IImage {
	url: string;
	alt: string;
}

export interface IItem {
	text: string;
	url: string;
	image: IImage;
}


interface IProps {
	items : IItem[];
}

export const SearchList: React.FC<IProps> = (props:IProps) => {

	const {items} = props;

	return (

		<ul className="search-list">
			{
				items.map((item, index) => {

					const { image, text, url } = item;

					return (
						
						<li key={index} className='search-list-item' onClick={ e => e.stopPropagation() }>

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