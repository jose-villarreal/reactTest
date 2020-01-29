import React, { useEffect, useState } from 'react';
import { RepoList } from '../RepoList';
import { SidebarDetails } from '../SidebarDetails';
import { useParams, useHistory } from "react-router-dom";

export const UserProfile = props => {

	const { user: currentParam } = useParams();
	const history = useHistory();
	const { services, isSidebarHidden, setIsSidebarHidden, grid } = props;
	const [ userParam, setUserParam ] = useState(currentParam); 
	const [ selectedUser, setSelectedUser ] = useState(null);


	
	// ONLY CALL THE "getUser" SERVICE IF THE URL PARAM HAS CHANGED
	if (currentParam !== userParam) setUserParam(currentParam);

	useEffect(() => {

		services.getUser(currentParam).then(data => {

			let user = {
				user: {
					title: data.login,
					image: { url: data.avatar_url, alt: data.login },
					tag: data.type,
					url: data.html_url,
					numericValues: [
						{ key: 'Repos', value: data.public_repos},
						{ key: 'Gists', value: data.public_gists},
						{ key: 'Followers', value: data.followers},
						{ key: 'Following', value: data.following},
					]
				},
				repos: []
			};

			services.getRepo(currentParam).then(data => {

				setIsSidebarHidden(false);
				setSelectedUser({...user, repos: data});

				console.log({...user, repos: data});

			});

		});

	},[userParam]);

	useEffect(() => {

		// VALIDATE IF THERE'S A USER LOADED AND IF THE PROFILE HAS BEEN HIDDEN GO TO HOME
		if (selectedUser && isSidebarHidden) history.push('/')
			
	});

	return (

			<div>
				{ selectedUser && (

					<div className={grid}>

						<SidebarDetails data={selectedUser.user}/>
						<RepoList repos={selectedUser.repos}/>

					</div>
				)}
			</div>

	);


}