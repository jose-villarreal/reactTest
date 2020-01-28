import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const SearchInput = (props) => {

	const { services } = props;
	const [users, setUsers] = useState([]);

	const [isListHidden, setIsListHidden] = useState(true);

	const userList = users.map((user, index) => (

		<li key={index} onClick={e => userClick(e)} className='search-list-item'>

			<Link to={ '/' + user.login } className='search-list-link'>
				<img className="card-image card-image-sm l-float-left" src={user.avatar_url} alt={user.login}></img>
				{user.login}
			</Link>

		</li>
	));

	const userClick = e => {

		setIsListHidden(false);
		e.stopPropagation();

	};

	const handleKeyUp = e => {

		const {target: {value}} = e;

		if (value) 

			services.searchUser({

				q: value

			}).then(data => {

				setUsers(data.items.length <= 15 ? data.items : data.items.slice(0,15));

				if (isListHidden) setIsListHidden(false);

			});

		else setUsers([]);

	};

	const handleFocus = e => {

		if (users.length > 0) setIsListHidden(false); 

	};

	const handleBlur = e => {



		setTimeout(() => {

			setIsListHidden(true);

		}, 250);


	};

	return (

		<div>
			<input className="search-input" type="text" placeholder="Search users" onClick={e => e.stopPropagation()}
				onFocus={ e => handleFocus(e) } onKeyUp={ e => handleKeyUp(e) } onBlur={ e => handleBlur(e) }></input>
			<ul className={ isListHidden ? 'search-list is-hidden' : 'search-list'}>

				{ userList }

			</ul>
		</div>

	);

};