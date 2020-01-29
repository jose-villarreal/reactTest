import React from 'react';

interface IImage {
	url: string;
	alt: string;
}

interface INumericValue {
	key: string;
	value: number;
}

export interface ISidebarData{
	title?: string;
	tag?: string;
	url?: string;
	numericValues?: INumericValue[];
	image?: IImage;
}

interface IProps {
	data: ISidebarData;
}

export const SidebarDetails: React.FC<IProps> = (props:IProps) => {

	const { title, image, tag, url, numericValues } = props.data;
	
	return (

		<header className="profile-header">

			<div className="l-text-center">

				{
					image && (
						<img className="card-image" src={image.url} alt={image.alt}></img>
					)
				}

				<h2 className="card-title">title</h2>

				{
					tag && (
						<p className="tag">
							{tag}
						</p>
					)
				}

				{
					url && (
						<a className="l-align-center" href={url} target="_blank" rel="noopener noreferrer">
							{url}
						</a>
					)
				}

				{

					numericValues && numericValues.length > 0 && (
						<div className="l-four-columns">
							{
								numericValues.map( (numericValue, index) => {
									return (
										<p key={index}>
											<span className="profile-number">{numericValue.value}</span><br></br>{numericValue.key}
										</p>
									);
								})

							}
						</div>
					)

				}

			</div>

		</header>

	);

};