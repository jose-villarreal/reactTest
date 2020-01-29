import React from 'react';
import { Link } from "react-router-dom";

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

			<article className="card l-text-center">

				<header>

					{ image && (
						<img className="card-image l-align-center" src={image.url} alt={image.alt}></img>
					) }
					<h2 className="card-title">
						{title}
					</h2>

					{ tag && (
						<p className="tag">
							{tag}
						</p>
					)}

				</header>
			</article>

		</Link>
		
	);
};