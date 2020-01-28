import React, { useState } from 'react';
import { SearchList } from '../SearchList';
import { UserList } from '../UserList';

export const SearchInput = props => {

	const {services} = props;
	const [isListHidden, setIsListHidden] = useState(true);
	const [searchValue, setSearchValue] = useState('');

	const delayedListHiding = () => {

		setTimeout(() => {

			setIsListHidden(true);

		}, 250);

	};

	const mapSearchList = users => users.map(user => ({

		image: { url: user.avatar_url, alt: user.login },
		text: user.login,
		url: `/${user.login}`

	})).slice(0,15);

	return(
		<div>

			<input className="search-input" type="text" placeholder="Search users" 
				onKeyUp={ e => setSearchValue(e.target.value) }  
				onFocus={ e => setIsListHidden(false) } 
				onClick={ e => e.stopPropagation() }
				onBlur={ delayedListHiding }>
			</input>

			<UserList searchValue={searchValue} services={services}>
				{
					({users}) => (<div className={isListHidden ? 'is-hidden' : ''}>
							<SearchList items={ mapSearchList(users) }/>
					</div>)
				}
			</UserList>

		</div>
	);
};