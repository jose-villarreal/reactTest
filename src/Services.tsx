type ISearchParamName = 'q' | 'sort' | 'order';

interface ISearchParams {
	q: string;
	sort?: string;
	order?: string;
}

export interface IUser {
	login: string;
	avatar_url: string;
	type: string;
	html_url: string;
	public_repos?: number;
	public_gists?: number;
	followers?: number;
	following?: number;
}

export interface IUserSearch {
	items: IUser[]
}

 export interface IRepo {
	name: string;
	html_url: string;
	description: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
}

export default class Services {

	url: string = 'https://api.github.com/';
	clientId: string = 'a5b7cb01066f337f9c6f';
	clientSecret: string = '39e7aa46f7438bfb3fcc6756eaad1e51740ff238';
	queryParams: string = `?client_id=${this.clientId}&client_secret=${this.clientSecret}`;

	async fetchData<T> (url: string, method: string):Promise<T> {

		let options = {
			method,
			headers: new Headers({
				'Content-Type': 'application/json',
				'Accept': 'application/vnd.github.v3+json'
			})
		}

		try {

			let response = await fetch(url, options);
			return  await response.json();


		} catch (error) {

			console.log(error);
			throw error;

		}


	}

	async getUsers (): Promise<IUser[]> {

		return await this.fetchData<IUser[]>(`${this.url}users${this.queryParams}`,'GET');

	}

	async getUser (user: string): Promise<IUser> {

		return await this.fetchData<IUser>(`${this.url}users/${user}${this.queryParams}`,'GET');

	}

	async getRepo (user: string): Promise<IRepo[]> {

		return await this.fetchData(`${this.url}users/${user}/repos${this.queryParams}`,'GET');

	}

	async searchUser (searchParams: ISearchParams): Promise<IUserSearch>  {

		let paramString: string = '';

		for (let key in searchParams) paramString = `${paramString}&${key}=${searchParams[key as ISearchParamName]}`;
		
		return await this.fetchData<IUserSearch>(`${this.url}search/users${this.queryParams}${paramString}`,'GET');

	}

};
