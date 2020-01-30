import React from 'react';
import { ListBlockUl, ListBlockItem, ListBlockItemTitle, ListBlockItemFooter } from './styles';
import { IconFork, IconStar } from '../../styles';

interface IFooterItem {
	icon?: string;
	text: string;
}
interface ITitle {

	url?: string;
	text:string;

}

export interface  IListBlockData{
	description: string;
	title: ITitle;
	footerItems?: IFooterItem[];
} 

interface IProps {
	data: IListBlockData[];
}

export const ListBlock: React.FC<IProps> = (props:IProps) => {


	const {data:items} = props;

	const iconSwitch = (icon: string | undefined, text: string, key: number) => {

		let iconElement;

		switch(icon) {
			case 'star':
				iconElement = <IconStar key={key}>{text}</IconStar>;
				break;
			case 'fork':
				iconElement = <IconFork key={key}>{text}</IconFork>;
				break;
			default:
				iconElement = <React.Fragment key={key}>{text}</React.Fragment>;
		}

		return iconElement;

	};

	return (

		<ListBlockUl>

			{ items.map((item, index) => {

				const { title, description, footerItems } = item;

				return(
					
					<ListBlockItem key={index}>

						{
							title.url ? (
								<a href={title.url} target="_blank" rel="noopener noreferrer">
									<ListBlockItemTitle>{title.text}</ListBlockItemTitle>
								</a>
							) : (
								<ListBlockItemTitle>{title.text}</ListBlockItemTitle>
							)
						}

						<p>
							{description}
						</p>

						{
							footerItems && (

								<ListBlockItemFooter>

									{
										footerItems.map( (item, index)=> iconSwitch(item.icon, item.text, index))
									}
									
								</ListBlockItemFooter>

							)
						}

					</ListBlockItem>

				);

			}) }

		</ListBlockUl>

	);

};