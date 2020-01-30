import React from 'react';
import { Link } from "react-router-dom";
import { CardArticle } from './styles';
import { RoundImage, Tag } from '../../styles';

interface IImage {
	url: string;
	alt: string;
}

interface IProps {

	title: string;
	tag?: string;
	url: string;
	image?: IImage;
}

export const Card: React.FC<IProps> = (props:IProps) => {

	const { title, image, tag, url } = props;

	return (

		<Link to={ url } onClick={e => e.stopPropagation()}>

			<CardArticle>

				{ image && (
					<RoundImage src={image.url} alt={image.alt}/>
				) }

				<h2>{title}</h2>

				{ tag && ( <Tag>{tag}</Tag> )}

			</CardArticle>

		</Link>
		
	);
};