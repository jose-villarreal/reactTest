import React, { useState } from 'react';
import { Main } from './components/Main';
import Services from './Services';
import { SearchInput } from './components/SearchInput';
import { BrowserRouter as Router } from "react-router-dom";

const services = new Services ();

export const App = props => {

	const [isProfileHidden, setIsProfileHidden] = useState(true);

	return(

		<Router>

			<div className="l-grid-main" onClick={ () => setIsProfileHidden(true) }>

				<header className="nav-header">
					<SearchInput services={services}/>
				</header>

				<Main services={services} isProfileHidden={isProfileHidden} setIsProfileHidden={setIsProfileHidden}/>
				<nav className="l-grid-main-nav nav-sidebar"></nav>

			</div>

		</Router>

	);

};