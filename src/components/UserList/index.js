import { useEffect, useState } from 'react';

export const UserList = props => {

	const { services, children, searchValue = null } = props;
	const [users, setUsers] = useState([]);

	useEffect(() => {

		(async () => {
			
			let users = [];

			if (searchValue) users = (await services.searchUser({ q: searchValue })).items;
			else users = await services.getUsers();

			setUsers(users);

		})();

	},[searchValue]);

	return children({users});

};

