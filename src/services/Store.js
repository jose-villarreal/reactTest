export default class Store {

	constructor (baseUrl, { 

		contextPath,
		queryParams, 
		contentType = "application/json", 
		method = "GET" 

	} = {}) {

		this.baseUrl = baseUrl
		this.internalOptions = {
			contextPath, 
			queryParams: {...queryParams},
			contentType, 
			method
		}

	}

	async fetchData (options) {

		let fetchOptions = {
			method: options.method,
			headers: new Headers({
				'Content-Type': options.contentType
			})
		}

		let queryParams = [];

		for (let key in options.queryParams) {
			queryParams.push(`${key}=${options.queryParams[key]}`);
		}
		
		let queryString = queryParams.join("&");
		let compoundUrl = this.baseUrl + options.contextPath;


		let url = queryString ? compoundUrl +'?'+ queryString : compoundUrl;

		try {

			let response = await fetch(url, fetchOptions);
			return await response.json();


		} catch (error) {

			console.log(error);
			throw error;

		}


	}

	async getAll () {

		return await this.fetchData(this.internalOptions);

	}

	async searchByText (searchParams) {
		
		return await this.fetchData({
			...this.internalOptions, 
			queryParams: {...this.internalOptions.queryParams, ...searchParams},
			contextPath: `search/${this.internalOptions.contextPath}`
		});

	}
	


};
