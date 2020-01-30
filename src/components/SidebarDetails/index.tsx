import React from 'react';
import { RoundImage, Tag } from '../../styles';
import { DetailsWrapper, NumericValue, GridFourColumns } from './styles';

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

		<DetailsWrapper>

			{
				image && ( <RoundImage src={image.url} alt={image.alt}></RoundImage>)
			}

			<h2>{title}</h2>

			{
				tag && (<Tag>{tag}</Tag>)
			}

			{
				url && (
					<a href={url} target="_blank" rel="noopener noreferrer">
						{url}
					</a>
				)
			}

			{

				numericValues && numericValues.length > 0 && (
					<GridFourColumns>
						{
							numericValues.map( (numericValue, index) => {
								return (
									<p key={index}>
										<NumericValue>{numericValue.value}</NumericValue>
										{numericValue.key}
									</p>
								);
							})

						}
					</GridFourColumns>
				)

			}

		</DetailsWrapper>

	);

};