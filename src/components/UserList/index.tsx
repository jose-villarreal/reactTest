import { useEffect, useState, useContext, ReactElement } from 'react';
import {IUser} from '../../Services';
import { ServicesContext } from '../../Contexts';

interface IChildrenProps {
	users: IUser[]
}

interface IChildren {
	(param: IChildrenProps): ReactElement;
}

interface IProps {
	searchValue?: string | null;
	children: IChildren;
}

export const UserList: React.FC<IProps> = props => {

	const { children, searchValue = null } = props;
	const [users, setUsers] = useState<IUser[]>([]);
	const services = useContext(ServicesContext);

	useEffect(() => {

		(async () => {
			
			let users: IUser[] = [];

			if (services) 
				users = (searchValue) ? (await services.searchUser({ q: searchValue })).items : await services.getUsers();
			
			setUsers(users);

		})();

	},[searchValue]);

	return children({users});

};

