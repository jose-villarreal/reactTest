import React, { useState } from 'react';
import { Main } from './components/Main';
import Services from './Services';
import { ServicesContext } from './Contexts';
import { UserSearch } from './components/UserSearch';
import { BrowserRouter as Router } from "react-router-dom";
import { MainGrid, MainNav, MainHeader } from './styles';

const services = new Services ();

export const App = () => {

	const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(true);

	return(

		<Router>

			<ServicesContext.Provider value={services}>

				<MainGrid onClick={ () => setIsSidebarHidden(true) }>

					<MainHeader>

						<UserSearch/>
						
					</MainHeader>

					<Main isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden}/>
					<MainNav/>

				</MainGrid>

			</ServicesContext.Provider>


		</Router>

	);

};