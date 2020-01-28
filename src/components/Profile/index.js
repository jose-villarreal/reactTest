import React, { useEffect, useState } from 'react';
import { RepoList } from '../RepoList';
import { useParams, useHistory } from "react-router-dom";

export const Profile = (props) => {

	const { user: currentParam } = useParams();
	const history = useHistory();
	const { services, isProfileHidden, setIsProfileHidden } = props;
	const [ userParam, setUserParam ] = useState(currentParam); 
	const [ selectedUser, setSelectedUser ] = useState(null);

	
	// ONLY CALL THE "getUser" SERVICE IF THE URL PARAM HAS CHANGED
	if (currentParam !== userParam) setUserParam(currentParam);

	useEffect(() => {

		services.getUser(currentParam).then(data => {

			let user = {...data, repos: []};
			services.getRepo(currentParam).then(data => {

				setIsProfileHidden(false);
				setSelectedUser({...user, repos: data});

			});

		});

	},[userParam]);

	useEffect(() => {

		// VALIDATE IF THERE'S A USER LOADED AND IF THE PROFILE HAS BEEN HIDDEN GO TO HOME
		if (selectedUser && isProfileHidden) history.push('/')
			
	});

	return (

		<aside className="profile" onClick={e => e.stopPropagation()}>

			{ selectedUser ? (

				<div className="l-aside-rows">

					<header className="profile-header">

						<div className="l-text-center">

							<img className="card-image" src={selectedUser.avatar_url} alt={selectedUser.login}></img>
							<h2 className="card-title">{selectedUser.login}</h2>
							<p className="tag">
								{selectedUser.type}
							</p>
							<a className="l-align-center" href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">
								{selectedUser.html_url}
							</a>

							<div className="l-four-columns">

								<p>
									<span className="profile-number">{selectedUser.public_repos}</span><br></br>Repos
								</p>
								<p>
									<span className="profile-number">{selectedUser.public_gists}</span><br></br>Gists
								</p>
								<p>
									<span className="profile-number">{selectedUser.followers}</span><br></br>Followers
								</p>
								<p>
									<span className="profile-number">{selectedUser.following}</span><br></br>Following
								</p>
								
							</div>

						</div>

					</header>

					<RepoList repos={selectedUser.repos}/>

				</div>


				

			) : ''}

		</aside>


		
	);

};