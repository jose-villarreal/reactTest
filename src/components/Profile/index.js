import React from 'react';
import { RepoList } from '../RepoList';

export const Profile = (props) => {

	return (
		<aside className="profile" onClick={e => e.stopPropagation()}>
			<header className="profile-header">

				<div className="l-text-center">

					<img className="card-image" src={props.selectedUser.avatar_url} alt="mojombo"></img>
					<h2 className="card-title">{props.selectedUser.login}</h2>
					<p className="tag">
						{props.selectedUser.type}
					</p>
					<a className="l-align-center" href={props.selectedUser.html_url} target="_blank" rel="noopener noreferrer">
						{props.selectedUser.html_url}
					</a>

					<div className="l-four-columns">
						<p>
							<span className="profile-number">{props.selectedUser.public_repos}</span><br></br>Repos
						</p>
						<p>
							<span className="profile-number">{props.selectedUser.public_gists}</span><br></br>Gists
						</p>
						<p>
							<span className="profile-number">{props.selectedUser.followers}</span><br></br>Followers
						</p>
						<p>
							<span className="profile-number">{props.selectedUser.following}</span><br></br>Following
						</p>
					</div>

				</div>

			</header>

			<RepoList repos={props.selectedUser.repos}/>

		</aside>
	);

};