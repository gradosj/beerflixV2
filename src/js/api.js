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

    getShowDetail: id => {
      console.log('AKJSDHAKLSJDHALSKJDHAKLSJDHALKSJDH');
      console.log(`${showsAPIEndpoint}/${id}`);

      return fetch(`${showsAPIEndpoint}/${id}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': API_KEY
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error retrieving shows');
          }
          return response.json();
        })

        .then(detail => {
          return detail;
        })
        .catch(err => {
          console.error(err.message);
          throw err;
        })
    },

    pushLikes: beerId => { 
        let api = `https://beerflix-api.herokuapp.com/api/v1/beers/${beerId}/like`;


        return fetch(api, {
          method: 'POST',
          headers: {
            'X-API-KEY': API_KEY,
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error sending like');
          }
          return response.json();
        })

        .then(detail => {
          return detail;
        })
        .catch(err => {
          console.error(err.message);
          throw err;
        })
        /*  .then(datos => console.log(datos.beers))*/
      }
    
  };
};

export default api;