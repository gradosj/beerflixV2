import renderHomeShows from './shows.js';
import storage from './storage.js';
import {INPUT_STORAGE_ID, STORAGE_TYPE} from './navbar.js';

const {getItem} = storage(STORAGE_TYPE);

renderHomeShows(getItem(INPUT_STORAGE_ID));


export default renderHomeShows;