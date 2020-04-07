//import renderShows from "./main";
import api from './api.js';

const { getShows } = api();

const renderShows = (element, items, fecha) => {
	element.innerHTML = '';

	items.forEach((items) => {
		let fechaOK;

		/* si el filtro de la fecha viene informado realizamos las validaciones y solo mostramos las menores a la fecha de filtrado */

		if (fecha != '' || fecha === undefined) {
			fechaOK = goodDate(fecha);
			let fechaInput = new Date('01/' + fechaOK);
			let fechaBeer = new Date('01/' + items.firstBrewed);
			if (fechaInput.getTime() > fechaBeer.getTime()) {
				renderiza(element, items);
			}
		} else {
			renderiza(element, items);
		}
	});
};

const renderHomeShows = async (text, fecha) => {
	try {
		const { beers } = await getShows(text, fecha);
		const showSection = document.querySelector('#show-section');

		renderShows(showSection, beers, fecha);
	} catch (err) {}
};

const goodDate = (filtroFecha) => {
	var info = filtroFecha.split('-');
	return info[1] + '/' + info[0];
};

const renderiza = (element, items) => {
	element.innerHTML =
		element.innerHTML +
		`
           <div id='show-section' class="col-md-4">
           <div class="card">
             <img class="card-img-top img-fluid redimension" height="600" src="${items.image}" alt="cerveza">
             <div class="card-body">
               <h4 class="card-title">${items.name}</h4>
               <p class="card-text">${items.firstBrewed}</p>
               <a id="detalle" href="/detail/${items.beerId}" class="btn btn-primary">Ir a …</a>
             </div>
           </div>
         </div>
           
           `;
};

export default renderHomeShows;
