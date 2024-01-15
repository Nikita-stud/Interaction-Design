import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catchAndDisplay.js";
import {getQueryParam} from "./helper/getQueryParam.js";

const detailsContainer = document.querySelector(".details__container");

const id = getQueryParam("id");
const jacketUrl = `${url}/${id}`;

if(!id){
  window.location.href="/";
}



async function fetchJacket(){
  try{
    const fetched = await fetch(jacketUrl);
    const results = await fetched.json();
    const jackets = results;

    detailsContainer.innerHTML ="";

    createDetailsHTML(jackets)

  }catch(error){
    catchAndDisplay(".details__container","There has been an error in loading the page","error")
  }

}
fetchJacket()



function filterDiscount(jacket){

  let discountedPriceString = "";
  if(jacket.discountedPrice >= jacket.price  && jacket.discountedPrice){
    discountedPriceString = jacket.discountedPrice;
    /* Price from createDetailsHTML */
    price.style.textDecoration = "line-through";
  }         
}


function createDetailsHTML(jacket){
  const container = document.querySelector(".details__container");

  // const div = document.createElement("div");
  // div.classList.add("details__")

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
  discount.textContent =`kr ${jacket.discountedPrice},-`;
  
  container.append(h1);
  container.append(img)
  container.append(detailsPrg);
  container.append(price);
  container.append(discount);
}
