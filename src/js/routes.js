import renderHomeShows from './shows.js';
import renderDetail from './detail.js';
import storage from './storage.js';
import {INPUT_STORAGE_ID, INPUT_STORAGE_FECHA, STORAGE_TYPE} from './navbar.js';


const {getItem} = storage(STORAGE_TYPE);

/*recibimos los parametros almacenados en la storage */

page('/', () => {
      renderHomeShows(getItem(INPUT_STORAGE_ID), getItem(INPUT_STORAGE_FECHA));

});
page('/detail/:id', (ctx) => {
    const {params :{id}} = ctx;
    renderDetail(id);
});

page();


export default renderHomeShows;