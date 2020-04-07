import storage from './storage.js';
import renderShowsDOM from './shows.js';


export const INPUT_STORAGE_ID = 'navbar-input';
export const STORAGE_TYPE = 'lStorage';
export const INPUT_STORAGE_FECHA = 'navbar-fecha'; 


console.log('DESDE EL MAVBAR');

const {setItem, getItem} = storage(STORAGE_TYPE);

console.log('entra en el navbaraaaaaa' );
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');
const fechaInput = document.querySelector('#filtroFecha');

searchInput.value = getItem(INPUT_STORAGE_ID);
fechaInput.value = getItem(INPUT_STORAGE_FECHA);
console.log(searchInput.value);
console.log(fechaInput.value);


// DUDA ---- > NO PILLA EL EVENTO SUBMIT AL CLICKAR EN BOTON
searchForm.addEventListener('click', evt => {
    evt.preventDefault();
    console.log('fecha desde el navbar --> ');
    if (searchInput.validity.valid || fechaInput.validity.valid) {

        console.log('entra en la validacion del navbar');

        console.log('fecha desde el navbar --> ', fechaInput.value);
        renderShowsDOM(searchInput.value, fechaInput.value); //pintamos el show
        
        //almacenar en local storage
        setItem(INPUT_STORAGE_ID, searchInput.value);
        setItem(INPUT_STORAGE_FECHA, fechaInput.value);

        console.log('get shows: ', searchInput.value);
    };

    

});









