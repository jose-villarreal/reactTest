import React from 'react';
import { UserList } from '../UserList';
import { SearchList, IItem } from '../SearchList';
import { SearchInput } from '../SearchInput';
import {IUser} from '../../Services';
import { HideableDiv } from './styles';

export const UserSearch: React.FC = () => {

	const mapSearchList = (users:IUser[]): IItem[] => users.map(user => ({

		image: { url: user.avatar_url, alt: user.login },
		text: user.login,
		url: `/${user.login}`

	})).slice(0,15);

	return (

		<SearchInput>

			{
				({ searchValue, isListHidden}) => 

					<UserList searchValue={searchValue}>

						

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