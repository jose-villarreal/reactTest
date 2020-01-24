import React, { useState } from 'react';

export const SearchInput = (props) => {

	const { services } = props;
	const [users, setUsers] = useState([]);
	const userList = users.map((user, index) => <li key={index}>{user.login}</li>);

	const handleKeyUp = e => {

		const {target: {value}} = e;

		if (value)

			services.searchUser({

				q: value

			}, data => {

				setUsers(data.items.length <= 15 ? data.items : data.items.slice(0,15));

			});

		else setUsers([]);

	};

	const handleFocus = e => {

	}

	return (

		<div>
			<input className="search-input" type="text" placeholder="Search users" 
				onFocus={ e => handleFocus(e) } onKeyUp={ e => handleKeyUp(e) }></input>
			<ul className="search-list is-hidden">

				{ userList }

			</ul>
		</div>

	);

};