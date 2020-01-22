export default class Services {

	url = 'https://api.github.com/';
	clientId = 'a5b7cb01066f337f9c6f';
	clientSecret = '39e7aa46f7438bfb3fcc6756eaad1e51740ff238';
	queryParams = `?client_id=${this.clientId}&client_secret=${this.clientSecret}`;

	fetchData (url, method, callback, body) {

		let options = {
			method,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}

		if (body) options.body = JSON.stringify(body);

		fetch(url, options)
		.then(res => res.text())
		.then(data => callback(data))
		.catch(() => console.log('Can’t access response.'));

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

}