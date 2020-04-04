//import renderShows from "./main";
import api from './api.js';

const {getShows } = api();

const templateShow = (show) => {
    return `
    <div id='show-section' class="col-md-4">
    <div class="card">
      <img class="card-img-top img-fluid redimension" height="600" src="${show.image}" alt="cerveza">
      <div class="card-body">
        <h4 class="card-title">${show.name}</h4>
        <p class="card-text">${show.firstBrewed}</p>
        <a id="detalle" href="/detail/${show.beerId}" class="btn btn-primary">Ir a …</a>
      </div>
    </div>
  </div>
    
    `;
};


const renderShows = (element, items) => {
     
    const htmlShows = items.map(function(show) {
        return templateShow(show);
    }).join(''); // El metodo join sirve para indicar el campo con el que se separan los campos
                 // del array, en este caso al ir vacios se separaran sin caracter. 

    element.innerHTML = htmlShows;

    
};

const renderHomeShows = async text => {
    try {   
        const {beers} = await getShows(text);
        const showSection = document.querySelector('#show-section');
       console.log('estos son los shows: -->', beers);
        renderShows(showSection, beers);
    } catch (err) {
        console.log(err);
    }
};


export default renderHomeShows;