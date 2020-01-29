import React from 'react';

export const ListBlock = props => {


	const {data:items} = props;

	return (

		<ul className="list-block">

			{ items.map((item, index) => {

				const { title, description, footerItems } = item;

				return(
					
					<li className="list-block-item" key={index}>

						{
							title.url ? (
								<a href={title.url} target="_blank" rel="noopener noreferrer">
									<h3 className="list-block-item-title">{title.text}</h3>
								</a>
							) : (
								<h3 className="list-block-item-title">{title.text}</h3>
							)
						}

						<p>
							{description}
						</p>

						{
							footerItems && (

								<p className="list-block-item-footer">

									{
										footerItems.map( (item, index)=> <span key={index} className={item.icon && `icon-${item.icon}`}>{item.text}</span> )
									}
									
								</p>

							)
						}

					</li>

				);

			}) }

		</ul>

	);

};