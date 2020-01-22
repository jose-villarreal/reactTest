import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Services from './Services';
import { UserList } from './components/UserList';
import { Profile } from './components/Profile';
import './main.css';

const services = new Services ();

const App = () => {

	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [mainClass, setMainClass] = useState('');

	useEffect(() => {

		services.getUsers(data => {

			setUsers(JSON.parse(data));

		});

	},[]);

	const selectUser = user => {

		services.getUser(user, data => {

			let selectedUser = {...JSON.parse(data), repos: []};

			setSelectedUser(selectedUser);
			setMainClass('is-two-columns');

			services.getRepo(user, data => {

				setSelectedUser({...selectedUser, repos: JSON.parse(data)});

			});

		});

	};

	const hideProfile = () => {

		setSelectedUser(null);
		setMainClass('');

	};

	return(

		<div className="l-grid-main" onClick={hideProfile}>

			<header className="nav-header"></header>
			<nav className="l-grid-main-nav nav-sidebar"></nav>

			<main className={mainClass}>
				<UserList users={users} selectUser={selectUser}/>
				{ selectedUser ? <Profile selectedUser={selectedUser}/> : ''}
			</main>

		</div>

	);

};

ReactDOM.render(<App/>, document.getElementById('root'));