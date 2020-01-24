import React, { useEffect, useState, useRef } from 'react';
import Services from './Services';
import { UserList } from './components/UserList';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

const services = new Services ();

export const App = (props) => {
	
	const [users, setUsers] = useState([]);
	const [isProfileHidden, setIsProfileHidden] = useState(true);

	useEffect(() => {

		services.getUsers(data => {

			setUsers(data);

		});

	},[]);


	return(

		<Router>

			<div className="l-grid-main" onClick={ () => setIsProfileHidden(true) }>

				<header className="nav-header">
					<SearchInput services={services}/>
				</header>
				<nav className="l-grid-main-nav nav-sidebar"></nav>
				<main className={ isProfileHidden ? '' : 'is-two-columns'}>
					<UserList users={users}/>
					<Switch>
						<Route path="/:user" children={ <Profile services={services} isProfileHidden={isProfileHidden}
						setIsProfileHidden={setIsProfileHidden}/> } />
					</Switch>
				</main>

			</div>
			

		</Router>

	);

};