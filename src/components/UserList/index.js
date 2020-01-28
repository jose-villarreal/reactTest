import { useEffect, useState } from 'react';

export const UserList = (props) => {

	const { services, children, searchValue = null } = props;
	const [users, setUsers] = useState([]);

	useEffect(() => {

		(async () => {
			
			if (searchValue) setUsers((await services.searchUser({ q: searchValue })).items);
			else setUsers(await services.getUsers());

		})();

	},[searchValue]);

	return children({users});

};

