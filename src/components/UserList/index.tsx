import { useEffect, useState, ReactElement } from 'react';
import Services, {IUser} from '../../Services';

interface IChildrenProps {
	users: IUser[]
}

interface IChildren {
	(param: IChildrenProps): ReactElement;
}

interface IProps {
	services: Services;
	searchValue?: string | null;
	children: IChildren;
}

export const UserList: React.FC<IProps> = props => {

	const { services , children, searchValue = null } = props;
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {

		(async () => {
			
			let users: IUser[] = [];

			if (searchValue) users = (await services.searchUser({ q: searchValue })).items;
			else users = await services.getUsers();

			setUsers(users);

		})();

	},[searchValue]);

	return children({users});

};

