import {replace} from './ui.js';
import renderShowsDOM from './shows.js';

console.log('entra en el navbar' );
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');
console.log(searchInput);

// DUDA ---- > NO PILLA EL EVENTO SUBMIT AL CLICKAR EN BOTON
searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
        renderShowsDOM(searchInput.value); //pintamos el show
        //pintar los shows
        //almacenar en local storage

        console.log('get shows: ', searchInput.value);
    };

    
   


});









