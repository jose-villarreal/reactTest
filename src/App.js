import React, { useEffect, useState } from 'react';
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
	const [mainClass, setMainClass] = useState('');

	

	const hideProfile = () => {

		setMainClass('');

	};

	const showProfile = () => {

		setMainClass('is-two-columns');

	};

	useEffect(() => {

		services.getUsers(data => {

			setUsers(data);

		});

	},[]);

	return(

		<Router>

			<div className="l-grid-main" onClick={hideProfile}>

				<header className="nav-header">
					<SearchInput services={services}/>
				</header>
				<nav className="l-grid-main-nav nav-sidebar"></nav>
				<main className={mainClass}>
					<UserList users={users}/>
					<Switch>
						<Route path="/:user" children={ <Profile services={services} showProfile= {showProfile}/> } />
					</Switch>
				</main>

			</div>
			

		</Router>

	);

};