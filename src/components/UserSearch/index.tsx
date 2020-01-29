import React from 'react';
import { UserList } from '../UserList';
import { SearchList, IItem } from '../SearchList';
import { SearchInput } from '../SearchInput';
import Services, {IUser} from '../../Services';

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
							({users}) => (<div className={isListHidden ? 'is-hidden' : ''}>
									<SearchList items={ mapSearchList(users) }/>
							</div>)
						}

					</UserList>
					
				
			}

		</SearchInput>
		
	);

}