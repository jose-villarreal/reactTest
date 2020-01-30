import React, { useEffect, useState } from 'react';
import { ListBlock, IListBlockData } from '../ListBlock';
import { SidebarDetails, ISidebarData }  from '../SidebarDetails';
import { useParams, useHistory } from 'react-router-dom';
import { GridTwoRows} from './styles';
import Services from '../../Services';

interface IProps {
	services: Services;
	isSidebarHidden: boolean;
	setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IRouteParams {
	user: string;
}

interface ISelectedUser {

	user: ISidebarData;
	repos: IListBlockData[];

}

export const UserProfile: React.FC<IProps> = (props:IProps) => {

	const { user: currentParam } = useParams<IRouteParams>();
	const history = useHistory();
	const { services, isSidebarHidden, setIsSidebarHidden } = props;
	const [ userParam, setUserParam ] = useState(currentParam); 
	const [ selectedUser, setSelectedUser ] = useState<ISelectedUser | null>(null);


	
	// ONLY CALL THE "getUser" SERVICE IF THE URL PARAM HAS CHANGED
	if (currentParam !== userParam) setUserParam(currentParam);

	useEffect(() => {

		(async () => {

			let data = await services.getUser(currentParam);

			let parsedData: ISelectedUser = {
				user: {
					title: data.login,
					image: { url: data.avatar_url, alt: data.login },
					tag: data.type,
					url: data.html_url,
					numericValues: [
						{ key: 'Repos', value: data.public_repos!},
						{ key: 'Gists', value: data.public_gists!},
						{ key: 'Followers', value: data.followers!},
						{ key: 'Following', value: data.following!},
					]
				},
				repos: (await services.getRepo(currentParam)).map(repo => ({
					title: {
						url: repo.html_url,
						text: repo.name,
		
					},
					description: repo.description,
					footerItems:[
						{ text: repo.language},
						{ icon:'star', text: repo.stargazers_count.toString()},
						{ icon:'fork', text: repo.forks_count.toString()},
					]

				}))

			};

			setIsSidebarHidden(false);
			setSelectedUser(parsedData);

		})();

	},[userParam]);

	useEffect(() => {

		// VALIDATE IF THERE'S A USER LOADED AND IF THE PROFILE HAS BEEN HIDDEN GO TO HOME
		if (selectedUser && isSidebarHidden) history.push('/')
			
	});

	return (

			
			<GridTwoRows>

				{ selectedUser && (

					<React.Fragment>

						<SidebarDetails data={selectedUser.user}/>
						<ListBlock data={selectedUser.repos}/>

					</React.Fragment>
				)}

			</GridTwoRows>

	);


}