import React from 'react';
import { UserList } from '../UserList';
import { SearchList, IItem } from '../SearchList';
import { SearchInput } from '../SearchInput';
import Services, {IUser} from '../../Services';
import { HideableDiv } from './styles';

interface IProps {

	services: Services
	
}

export const UserSearch: React.FC<IProps> = (props:IProps) => {

	const { services } = props;

	const mapSearchList = (users:IUser[]): IItem[] => users.map(user => ({

		image: { url: user.avatar_url, alt: user.login },
		text: user.login,
		url: `/${user.login}`

	})).slice(0,15);

	return (

		<SearchInput>

			{
				({ searchValue, isListHidden}) => 

					<UserList searchValue={searchValue} services={services}>

						

						{
							({users}) => (<HideableDiv hide={isListHidden}>
								<SearchList items={ mapSearchList(users) }/>
							</HideableDiv>)
						}

					</UserList>
					
				
			}

		</SearchInput>
		
	);

}