const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';


const api = (apiURL = 'https://beerflix-api.herokuapp.com/api/v1/beers?limit=10') => {
	//const searchAPIEndpoint = `${apiURL}/?search=`;
	const showsAPIEndpoint = `${apiURL}`;
	const showsApiDetails = 'https://beerflix-api.herokuapp.com/api/v1/beers';

	return {
		/* Show beers on main page */
		getShows: async (filtro1, fecha) => {
			try {
				const URL = filtro1
					? `https://beerflix-api.herokuapp.com/api/v1/beers?limit=10&search=${filtro1}`
					: showsAPIEndpoint;

				/* dates validations */
				let fechaOK;

				if (fecha != undefined && fecha != '') {
					fechaOK = goodDate(fecha);
				}

				const response = await fetch(URL, {
					method: 'GET',
					headers: {
						'X-API-KEY': API_KEY
					}
				});

				if (!response.ok) {
					throw new Error('Error retrieving shows');
				}
				const data = await response.json();
				//console.log(data);
				return data;
			} catch (err) {
				console.error(err.message);
				throw err;
			}
		},

		/*Retrieve detail page */
		getShowDetail: (id) => {
			return fetch(`${showsApiDetails}/${id}`, {
				method: 'GET',
				headers: {
					'X-API-KEY': API_KEY
				}
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Error retrieving shows');
					}
					return response.json();
				})
				.then((detail) => {
					return detail;
				})
				.catch((err) => {
					console.error(err.message);
					throw err;
				});
		},

		/* Send "Like" */
		pushLikes: (beerId) => {
			let api = `https://beerflix-api.herokuapp.com/api/v1/beers/${beerId}/like`;

			return fetch(api, {
				method: 'POST',
				headers: {
					'X-API-KEY': API_KEY
				}
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Error sending like');
					}
					return response.json();
				})
				.then((detail) => {
					return detail;
				})
				.catch((err) => {
					console.error(err.message);
					throw err;
				});
		}
	};
};

/* convert data function */
const goodDate = (filtroFecha) => {
	var info = filtroFecha.split('-');
	return info[1] + '/' + info[0];
};

export default api;
