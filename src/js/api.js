
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';

const api = (apiURL = 'https://beerflix-api.herokuapp.com/api/v1/beers?') => {
  //const searchAPIEndpoint = `${apiURL}/?search=`;
const showsAPIEndpoint = `${apiURL}`;
const showsApiDetails  = 'https://beerflix-api.herokuapp.com/api/v1/beers';

console.log('DESDE EL API');


  return {
    getShows: async (filtro1, fecha) => {
      try {

        

        console.log('desde el api ----> ', fecha)

        const URL = filtro1 ? `https://beerflix-api.herokuapp.com/api/v1/beers?limit=10&search=${filtro1}` : showsAPIEndpoint;

        /* validaciones de fecha */
        let fechaOK;

        console.log('la puta fecha: ' , fecha)

        if (fecha != undefined && fecha != '') {
            fechaOK = goodDate(fecha);

            console.log('valor de fechaOK --> ', fechaOK);
            console.log(true);
        }


        console.log()

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
      console.log(`${showsApiDetails}/${id}`);

      return fetch(`${showsApiDetails}/${id}`, {
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



const goodDate = (filtroFecha) => {
  var info = filtroFecha.split('-');
  return info[1] + '/' + info[0];
};



export default api;