import React from 'react';
import { Main } from './components/Main';
import Services from './Services';
import { SearchInput } from './components/SearchInput';
import { BrowserRouter as Router } from "react-router-dom";

const services = new Services ();

export const App = (props) => {

	return(

		<Router>

			<div className="l-grid-main">

				<header className="nav-header">
					<SearchInput services={services}/>
				</header>

				<nav className="l-grid-main-nav nav-sidebar"></nav>

				<Main services={services}/>

			</div>

		</Router>

	);

};