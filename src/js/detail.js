import api from './api.js';

const { getShowDetail, pushLikes } = api();

console.log('DESDE EL DETAIL');

const detailTeplate = ({ name, image, firstBrewed, beerId, description, likes, comments } = {}) => {
  console.log('comentariossssssssssssssssssssssssssssssss');
  console.log(comments);
  

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
              
              <p id = "imgLikes" class="card-text"><small class="text-muted"><img class="icon" src="/src/images/like.png" alt=""> ${likes}
            
          </small>
              
  
           
          </div>
        </div>
      </div>
        
    `;
};

function imprimirHTML(datos) {
  //console.log('bla bla' , datos);
  
  const { likes } = datos;
                let ponLikes = document.querySelector('#imgLikes');
                ponLikes.innerHTML =  `
                <p id = "imgLikes" class="card-text"><small class="text-muted">LIKE! ${likes}</small></p>
                        
        `;
          
        }



const renderDetail = async (beerId) => {
  try {
    const { beer } = await getShowDetail(beerId);

    const template = detailTeplate(beer);

    console.log('el template tiene: ', template);

    const mainSection = document.querySelector('#show-section');
    mainSection.innerHTML = template;

    const imgLikes = document.querySelector('#imgLikes');
    imgLikes.addEventListener('click', async evt => {
      //evt.preventDefault();
      await pushLikes(beerId);
      imprimirHTML(beer);
      renderDetail(beerId);
     
      

    });

  } catch (err) {
    console.error(err);
  }
};

export default renderDetail;
