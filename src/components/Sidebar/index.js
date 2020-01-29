import React from 'react';

export const Sidebar = props => {

	
	const { children, setIsSidebarHidden } = props;
	

	return (

		<aside className="profile" onClick={e => e.stopPropagation()}>

			<span className="icon-cancel profile-cancel" onClick={() => setIsSidebarHidden(true)}></span>

			{ children }

		</aside>
		
	);

};