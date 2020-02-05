import React from 'react';
import { UserList } from '../UserList';
import { UserProfile } from '../UserProfile';
import { Sidebar } from '../Sidebar';
import { Card } from '../Card';
import Services from '../../Services';
import { GridColumns, GridList } from './styles';
import {

  Switch,
  Route

} from "react-router-dom";

interface IProps {

	isSidebarHidden: boolean;
	setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
	
}

export const Main: React.FC<IProps> = (props:IProps) => {

	const {isSidebarHidden, setIsSidebarHidden} = props;

	return (

		<GridColumns twoColumns={!isSidebarHidden}>

			<UserList>

				{
					({users}) => {

						return (
							<GridList>
								
								{ users.map((user, index) => {

										const { login, avatar_url, type } = user;
										const image = { url: avatar_url, alt: login };

										return <Card key={ index } title={ login } tag={ type } url={'/'+login } image={ image }/>;

								}) }

							</GridList>
						);
					}

				}

			</UserList>

			<Switch>

				<Route path="/:user">
					<Sidebar setIsSidebarHidden={setIsSidebarHidden}>
						<UserProfile isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden}/>
					</Sidebar>
				</Route>
				
			</Switch>

		</GridColumns>


		

	);

};