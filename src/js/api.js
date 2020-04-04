const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';

const api = (apiURL = 'https://beerflix-api.herokuapp.com/api/v1/beers') => {
//const searchAPIEndpoint = `${apiURL}/?search=`;
const showsAPIEndpoint = `${apiURL}`;

return {
    getShows: async filtro1 => {
      try {

        const URL = filtro1 ? `https://beerflix-api.herokuapp.com/api/v1/beers?search=${filtro1}` : showsAPIEndpoint;
      

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
  };
};

export default api;