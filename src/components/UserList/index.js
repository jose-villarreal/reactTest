import React from 'react';
import { Link } from "react-router-dom";

export const UserList = (props) => {

	const handleClick = (e) => {

		e.stopPropagation();
		// e.nativeEvent.stopImmediatePropagation();
	};

	const users = props.users.map((user, index) => {

		const {avatar_url, login: username, type} = user;

		return (
			<Link to={ '/' + username } key={index} onClick={e => handleClick(e)}>
				<article className="card l-text-center">
					<header>
						<img className="card-image l-align-center" src={avatar_url} alt="mojombo"></img>
						<h2 className="card-title">
							{username}
						</h2>
						<p className="tag">
							{type}
						</p>
					</header>
				</article>
			</Link>
		);

	});

	return(
		
		<div className="l-grid-list">
			{users}
		</div>

	);

};

