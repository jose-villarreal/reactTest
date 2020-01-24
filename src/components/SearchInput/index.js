import React  from 'react';

export const SearchInput = (props) => {

	const { services } = props;

	const handleKeyUp = e => {

		// services.searchUser({
		// 	q: e.target.value
		// }, data => {
		// 	console.log(data.items);
		// });

	};


	return (

		<div>
			<input type="text" placeholder="Search users" onKeyUp={ e => handleKeyUp(e) }></input>
		</div>

	);

};