import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catch.js";

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const jacketUrl = `${url}/${id}`;

if(!id){
  window.location.href="/";
}



async function fetchJacket(){
  try{
    const fetched = await fetch(jacketUrl);
    const results = await fetched.json();
    const jackets = results;

    filterAPI(jackets)
    createDetailsHTML(jackets)

  }catch(error){
    console.log(error);
    catchAndDisplay("","There has been an error in loading the page","error")
  }

}
fetchJacket()



function filterAPI(jacket){

  let discount = "";
  
  const parsedDiscount = parseFloat(jacket.discountedPrice);
  const parsedPrice = parseFloat(jacket.price);

  if(parsedPrice <= parsedDiscount  && !parsedDiscount){
    discount = jacket.discountedPrice;
  }
                  
}


function createDetailsHTML(jacket){

  const container = document.querySelector(".details__container");

  const h1 = document.createElement("h1");
  h1.classList.add("details-header");
  h1.textContent =`${jacket.title} - ${jacket.baseColor}`;

  const div = document.createElement("div");
  div.classList.add("details-img");
  div.style.backgroundImage =`${jacket.image}`;

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.textContent =`${jacket.description}`;

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = `kr ${jacket.price},-`;

  const discount = document.createElement("p");
  discount.classList.add("details-discount");
  discount.textContent =`${jacket.discountedPrice}`;
  

  container.append(h1);
  container.append(div)
  container.append(detailsPrg);
  container.append(price);
  container.append(discount);

}
