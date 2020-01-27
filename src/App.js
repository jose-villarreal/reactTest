import React, { useState } from 'react';
import Services from './Services';
import { UserList } from './components/UserList';
import { Profile } from './components/Profile';
import { Card } from './components/Card';
import { SearchInput } from './components/SearchInput';
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

const services = new Services ();

export const App = (props) => {
	
	const [isProfileHidden, setIsProfileHidden] = useState(true);

	return(

		<Router>

			<div className="l-grid-main" onClick={ () => setIsProfileHidden(true) }>

				<header className="nav-header">
					<SearchInput services={services}/>
				</header>

				<nav className="l-grid-main-nav nav-sidebar"></nav>

				<main className={ isProfileHidden ? '' : 'is-two-columns'}>

					<UserList services={services}>

						{
							({users}) => users.map((user, index) => {

								const { login, avatar_url, type } = user;
								const image = { url: avatar_url, alt: login };

								return <Card key={ index } title={ login } tag={ type } url={'/'+login } image={ image }/>;

							})

						}

					</UserList>

					<Switch>

						<Route path="/:user" children={ <Profile services={services} isProfileHidden={isProfileHidden}
						setIsProfileHidden={setIsProfileHidden}/> } />
						
					</Switch>

				</main>

			</div>

		</Router>

	);

};