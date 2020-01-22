import React from 'react';

export const UserList = (props) => {

	const handleClick = (e, user) => {
		e.stopPropagation();
		props.selectUser(user);
	};
	
	const users = props.users.map((user, index) => {

		return (
			<article className="card l-text-center" key={index} onClick={e => handleClick(e, user.login)}>
				<header>
					<img className="card-image l-align-center" src={user.avatar_url} alt="mojombo"></img>
					<h2 className="card-title">
						{user.login}
					</h2>
					<p className="tag">
						{user.type}
					</p>
				</header>
				<footer className="card-footer">
					<a href="https://github.com/mojombo" target="_blank" rel="noopener noreferrer">
						{user.html_url}
					</a>
				</footer>
			</article>
		);

	});

	return(
		<div className="l-grid-list">
			{users}
		</div>
	);

};

