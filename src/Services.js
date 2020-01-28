export default class Services {

	url = 'https://api.github.com/';
	clientId = 'a5b7cb01066f337f9c6f';
	clientSecret = '39e7aa46f7438bfb3fcc6756eaad1e51740ff238';
	queryParams = `?client_id=${this.clientId}&client_secret=${this.clientSecret}`;

	async fetchData (url, method, callback, body) {

		let options = {
			method,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}

		if (body) options.body = JSON.stringify(body);

		try {

			let response = await fetch(url, options);
			let data = await response.text();
			callback(JSON.parse(data));

		} catch (error) {

			console.log(error);
			throw error;

		}


	}

	getUsers (callback) {

		this.fetchData(`${this.url}users${this.queryParams}`,'GET',callback);

	}

	getUser (user, callback) {

		this.fetchData(`${this.url}users/${user}${this.queryParams}`,'GET',callback);

	}

	getRepo (user, callback) {

		this.fetchData(`${this.url}users/${user}/repos${this.queryParams}`,'GET',callback);

	}

	searchUser (searchParams, callback) {

		let paramString = '';

		for (let key in searchParams) paramString = `${paramString}&${key}=${searchParams[key]}`;
		
		this.fetchData(`${this.url}search/users${this.queryParams}${paramString}`,'GET',callback);

	}

}

