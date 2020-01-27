import React, { useEffect, useState } from 'react';

export const UserList = (props) => {

	const { services, children } = props;
	const [users, setUsers] = useState([]);

	useEffect(() => {

		services.getUsers(data => {

			setUsers(data);

		});

	},[]);

	return(
		
		<div className="l-grid-list">

			{
				children({
					users
				})
			}
			
		</div>

	);

};

