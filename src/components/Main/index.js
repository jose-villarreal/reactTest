import React from 'react';
import { UserList } from '../UserList';
import { Profile } from '../Profile';
import { Card } from '../Card';
import {

  Switch,
  Route

} from "react-router-dom";

export const Main = props => {

	const { services } = props;
	const {isProfileHidden, setIsProfileHidden} = props;

	return (

		<main className={ isProfileHidden ? '' : 'is-two-columns'}>

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

				<Route path="/:user" children={ <Profile services={services} isProfileHidden={isProfileHidden}
				setIsProfileHidden={setIsProfileHidden}/> }/>
				
			</Switch>

		</main>

	);

};