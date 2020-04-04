const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';

const api = (API) => {
  return {
    getShows: async filtro1 => {
      try {
        let URL = `https://beerflix-api.herokuapp.com/api/v1/beers`;

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
        console.log(data);

      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },
  };
};

export default api;