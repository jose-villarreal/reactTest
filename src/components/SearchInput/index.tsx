import React, { useState, ReactElement } from 'react';
import { GrayInput } from './styles';

interface IChildrenProps {
	searchValue: string;
	isListHidden: boolean;
}

interface IChildren {

	(params:IChildrenProps): ReactElement

}

interface IProps {
	children: IChildren
}

export const SearchInput: React.FC<IProps> = (props:IProps) => {

	const {children} = props;
	const [isListHidden, setIsListHidden] = useState<boolean>(true);
	const [searchValue, setSearchValue] = useState<string>('');

	const delayedListHiding = () => {

		setTimeout(() => {

			setIsListHidden(true);

		}, 250);

	};


	return(

		<div>
			
			<GrayInput type="text" placeholder="Search users"
				onKeyUp={ e => setSearchValue((e.target as HTMLInputElement).value) }  
				onFocus={ e => setIsListHidden(false) } 
				onClick={ e => e.stopPropagation() }
				onBlur={ delayedListHiding }
			/>

			{ children({

				searchValue,
				isListHidden

			})}

		</div>

	);
};