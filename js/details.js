import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catch.js";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const jacketUrl = `${url}/${id}`;

const detailsContainer = document.querySelector(".details__container");

if(!id){
  window.location.href="/";
}



async function fetchJacket(){
  try{
    const fetched = await fetch(jacketUrl);
    const results = await fetched.json();
    const jackets = results;

    detailsContainer.innerHTML ="";

    filterAPI(jackets)
    createDetailsHTML(jackets)

  }catch(error){
    console.log(error);
    catchAndDisplay("","There has been an error in loading the page","error")
  }

}
fetchJacket()



function filterAPI(jacket){

  
                  
}


function createDetailsHTML(jacket){

  let discountedPriceString = "No discount";

  if(jacket.discountedPrice >= jacket.price  && jacket.discountedPrice){
    discountedPriceString = jacket.discountedPrice;
  }

  const container = document.querySelector(".details__container");

  const h1 = document.createElement("h1");
  h1.classList.add("details-header");
  h1.textContent =`${jacket.title} - ${jacket.baseColor}`;

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${jacket.image}`;
  img.alt = `${jacket.title}`;

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.textContent =`${jacket.description}`;

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = `kr ${jacket.price},-`;

  const discount = document.createElement("p");
  discount.classList.add("details-discount");
  discount.textContent =`${discountedPriceString}`;
  
  container.append(h1);
  container.append(img)
  container.append(detailsPrg);
  container.append(price);
  container.append(discount);

}
