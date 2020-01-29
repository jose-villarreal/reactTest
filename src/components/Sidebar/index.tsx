import React, { ReactElement } from 'react';

interface IProps {

	setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactElement;
}

export const Sidebar: React.FC<IProps> = (props:IProps) => {

	
	const { children, setIsSidebarHidden } = props;
	

	return (

		<aside className="profile" onClick={e => e.stopPropagation()}>

			<span className="icon-cancel profile-cancel" onClick={() => setIsSidebarHidden(true)}></span>

			{ children }

		</aside>
		
	);

};