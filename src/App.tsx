import React, { useState } from 'react';
import { Main } from './components/Main';
import Services from './Services';
import { UserSearch } from './components/UserSearch';
import { BrowserRouter as Router } from "react-router-dom";

const services = new Services ();

export const App = () => {

	const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(true);

	return(

		<Router>

			<div className="l-grid-main" onClick={ () => setIsSidebarHidden(true) }>

				<header className="nav-header">

					<UserSearch services={services}/>
					
				</header>

				<Main services={services} isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden}/>
				<nav className="l-grid-main-nav nav-sidebar"></nav>

			</div>

		</Router>

	);

};