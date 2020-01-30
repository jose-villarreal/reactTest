import React, { ReactElement } from 'react';
import { SideBarAside, SideBarCancel } from './styles';

interface IProps {

	setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactElement;
}

export const Sidebar: React.FC<IProps> = (props:IProps) => {

	
	const { children, setIsSidebarHidden } = props;
	

	return (

		<SideBarAside onClick={e => e.stopPropagation()}>

			<SideBarCancel onClick={() => setIsSidebarHidden(true)}></SideBarCancel>

			{ children }

		</SideBarAside>
		
	);

};