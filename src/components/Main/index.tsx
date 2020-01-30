import React from 'react';
import { UserList } from '../UserList';
import { UserProfile } from '../UserProfile';
import { Sidebar } from '../Sidebar';
import { Card } from '../Card';
import Services from '../../Services';
import {

  Switch,
  Route

} from "react-router-dom";

interface IProps {

	services: Services;
	isSidebarHidden: boolean;
	setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
	
}

export const Main: React.FC<IProps> = (props:IProps) => {

	const { services } = props;
	const {isSidebarHidden, setIsSidebarHidden} = props;

	return (

		<main className={ isSidebarHidden ? '' : 'is-two-columns'}>

			<UserList services={services}>

				{
					({users}) => {

						return (<div className="l-grid-list">
							{ users.map((user, index) => {

									const { login, avatar_url, type } = user;
									const image = { url: avatar_url, alt: login };

									return <Card key={ index } title={ login } tag={ type } url={'/'+login } image={ image }/>;

							}) }
						</div>);
					}

				}

			</UserList>

			<Switch>

				<Route path="/:user">
					<Sidebar setIsSidebarHidden={setIsSidebarHidden}>
						<UserProfile services={services}isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden} grid="l-aside-rows"/>
					</Sidebar>
				</Route>
				
			</Switch>

		</main>

	);

};