import storage from './storage.js';
import renderShowsDOM from './shows.js';

export const INPUT_STORAGE_ID = 'navbar-input';
export const STORAGE_TYPE = 'lStorage';
export const INPUT_STORAGE_FECHA = 'navbar-fecha';



const { setItem, getItem } = storage(STORAGE_TYPE);

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');
const fechaInput = document.querySelector('#filtroFecha');

searchInput.value = getItem(INPUT_STORAGE_ID);
fechaInput.value = getItem(INPUT_STORAGE_FECHA);


searchForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	if (searchInput.validity.valid || fechaInput.validity.valid) {
		renderShowsDOM(searchInput.value, fechaInput.value); //pintamos el show

		//almacenar en local storage
		setItem(INPUT_STORAGE_ID, searchInput.value);
		setItem(INPUT_STORAGE_FECHA, fechaInput.value);
	}
});
