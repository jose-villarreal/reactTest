import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListImage } from './styles'; 

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

		<List>
			{
				items.map((item, index) => {

					const { image, text, url } = item;

					return (
						
						<li key={index} onClick={ e => e.stopPropagation() }>

							<Link to={ url }>
								{(image && <ListImage src={image.url} alt={image.alt}/>)}
								{text}
							</Link>

						</li>
					);
				})
			}
		</List>

	);

};