import {replace} from './ui.js';
import renderShowsDOM from './shows.js';
import storage from './storage.js';

export const INPUT_STORAGE_ID = 'navbar-input';
export const STORAGE_TYPE = 'lStorage';

const {setItem, getItem} = storage(STORAGE_TYPE);

console.log('entra en el navbar' );
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');

searchInput.value = getItem(INPUT_STORAGE_ID);
console.log(searchInput);

// DUDA ---- > NO PILLA EL EVENTO SUBMIT AL CLICKAR EN BOTON
searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
        renderShowsDOM(searchInput.value); //pintamos el show
        
        //almacenar en local storage
        setItem(INPUT_STORAGE_ID, searchInput.value);

        console.log('get shows: ', searchInput.value);
    };

    

});









