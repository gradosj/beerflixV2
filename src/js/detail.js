import api from './api.js';

const { getShowDetail } = api();

const detailTeplate = ({ name, image, firstBrewed, beerId, description, likes } = {}) => {
	return `
    <div class="card mb-3" style="max-width: 800px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${image}" class="card-img redimension" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${firstBrewed}</p>
              <p class="card-text">${description}</p>
              
              <p id = "imgLikes" class="card-text"><small class="text-muted">LIKE! ${likes}</small></p>
            </div>
          </div>
        </div>
      </div>
        
    `;
};




const renderDetail = async (beerId) => {
	try {
		const { beer } = await getShowDetail(beerId);

    const template = detailTeplate(beer);
    
    console.log('el template tiene: ', template);

    const mainSection = document.querySelector('#show-section');
    
    mainSection.innerHTML = template;
    console.log('revisar sto---> ', mainSection.innerHTML);
	} catch (err) {
		console.error(err);
	}
};

export default renderDetail;
