import renderHomeShows from './shows.js';
import renderDetail from './detail.js';
import storage from './storage.js';
import {INPUT_STORAGE_ID, INPUT_STORAGE_FECHA, STORAGE_TYPE} from './navbar.js';

const {getItem} = storage(STORAGE_TYPE);



page('/', () => {
    renderHomeShows(getItem(INPUT_STORAGE_ID, INPUT_STORAGE_FECHA));
    console.log('Route /');
});
page('/detail/:id', (ctx) => {
    console.log('Detail');
    const {params :{id}} = ctx;
    console.log(id);
    renderDetail(id);
});

page();


export default renderHomeShows;