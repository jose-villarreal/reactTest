import React from 'react';
import { UserList } from '../UserList';
import { SearchList } from '../SearchList';
import { SearchInput } from '../SearchInput';

export const UserSearch = props => {

	const { services } = props;

	const mapSearchList = users => users.map(user => ({

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
							({users}) => (<div className={isListHidden ? 'is-hidden' : ''}>
									<SearchList items={ mapSearchList(users) }/>
							</div>)
						}

					</UserList>
					
				
			}

		</SearchInput>
		
	);

}