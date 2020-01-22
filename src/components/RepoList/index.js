import React from 'react';

export const RepoList = (props) => {

	const repos = props.repos.map((repo, index) => (

		<li className="list-block-item" key={index}>

			<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
				<h3 className="list-block-item-title">{repo.name}</h3>
			</a>
			<p>
				{repo.description}
			</p>
			<p className="list-block-item-footer">
				<span>{repo.language}</span> <span className="icon-star">{repo.stargazers_count}</span>  <span className="icon-fork">{repo.forks_count}</span>
			</p>

		</li>

	));

	return (

		<ul className="list-block">

			{ repos }

		</ul>

	);

};