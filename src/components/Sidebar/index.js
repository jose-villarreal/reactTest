import React from 'react';

export const Sidebar = props => {

	
	const { children } = props;
	

	return (

		<aside className="profile" onClick={e => e.stopPropagation()}>

			{ children }

		</aside>
		
	);

};