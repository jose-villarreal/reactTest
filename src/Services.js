export default class Services {

	url = 'https://api.github.com/';
	clientId = 'a5b7cb01066f337f9c6f';
	clientSecret = '39e7aa46f7438bfb3fcc6756eaad1e51740ff238';
	queryParams = `?client_id=${this.clientId}&client_secret=${this.clientSecret}`;

	async fetchData (url, method) {

		let options = {
			method,
			headers: new Headers({
				'Content-Type': 'application/json'
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

	async getUsers () {

		return await this.fetchData(`${this.url}users${this.queryParams}`,'GET');

	}

	async getUser (user) {

		return await this.fetchData(`${this.url}users/${user}${this.queryParams}`,'GET');

	}

	async getRepo (user) {

		return await this.fetchData(`${this.url}users/${user}/repos${this.queryParams}`,'GET');

	}

	async searchUser (searchParams) {

		let paramString = '';

		for (let key in searchParams) paramString = `${paramString}&${key}=${searchParams[key]}`;
		
		return await this.fetchData(`${this.url}search/users${this.queryParams}${paramString}`,'GET');

	}

}

