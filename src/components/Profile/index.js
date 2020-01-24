import React, { useEffect, useState } from 'react';
import { RepoList } from '../RepoList';
import { useParams } from "react-router-dom";

export const Profile = (props) => {

	const { user: userParam } = useParams();
	const { services, showProfile } = props;
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {


		services.getUser(userParam, data => {

			let user = {...JSON.parse(data), repos: []};

			services.getRepo(userParam, data => {

				showProfile();
				setSelectedUser({...user, repos: JSON.parse(data)});

			});

		});

	}, []);



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