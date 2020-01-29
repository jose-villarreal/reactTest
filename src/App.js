import React, { useState } from 'react';
import { Main } from './components/Main';
import Services from './Services';
import { SearchUsers } from './components/SearchUsers';
import { BrowserRouter as Router } from "react-router-dom";

const services = new Services ();

export const App = props => {

	const [isSidebarHidden, setIsSidebarHidden] = useState(true);

	return(

		<Router>

			<div className="l-grid-main" onClick={ () => setIsSidebarHidden(true) }>

				<header className="nav-header">

					<SearchUsers services={services}/>
					
				</header>

				<Main services={services} isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden}/>
				<nav className="l-grid-main-nav nav-sidebar"></nav>

			</div>

		</Router>

	);

};