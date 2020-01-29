import React, { useState } from 'react';

export const SearchInput = props => {

	const {children} = props;
	const [isListHidden, setIsListHidden] = useState(true);
	const [searchValue, setSearchValue] = useState('');

	const delayedListHiding = () => {

		setTimeout(() => {

			setIsListHidden(true);

		}, 250);

	};

	

	return(

		<div>

			<input className="search-input" type="text" placeholder="Search users" 
				onKeyUp={ e => setSearchValue(e.target.value) }  
				onFocus={ e => setIsListHidden(false) } 
				onClick={ e => e.stopPropagation() }
				onBlur={ delayedListHiding }>
			</input>

			{ children({

				searchValue,
				isListHidden

			})}

		</div>

	);
};