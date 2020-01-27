import React from 'react';

export const RepoList = (props) => {


	const {repos} = props;

	return (

		<ul className="list-block">

			{ repos.map((repo, index) => {

				const { html_url, name, description, language, stargazers_count, forks_count } = repo;

				return(
					
					<li className="list-block-item" key={index}>

						<a href={html_url} target="_blank" rel="noopener noreferrer">
							<h3 className="list-block-item-title">{name}</h3>
						</a>
						<p>
							{description}
						</p>
						<p className="list-block-item-footer">
							<span>{language}</span> <span className="icon-star">{stargazers_count}</span>  <span className="icon-fork">{forks_count}</span>
						</p>

					</li>

				);

			}) }

		</ul>

	);

};