import { url } from "./constants.js";
import { handleClick } from "./helper/handleClick.js";
import { catchAndDisplay } from "./ui/catchAndDisplay.js";

const container = document.querySelector(".spes-jacket__rows");


async function fetchDeals(){
  try{
    const fetched = await fetch(url);
    const results = await fetched.json();

    container.innerHTML= "";

    results.forEach(function(jacket){
      let discount = "";
      let textDecoration = ""

      if(jacket.price > jacket.discountedPrice){
        discount = jacket.discountedPrice;
        textDecoration ="line-through";
      }

      if(jacket.price > jacket.discountedPrice){
        container.innerHTML += `<div id="horizontal-jackets__container" class="horizontal-jackets__container">
                                  <div id="jackets-text__container" class="jackets-text__container">
                                  <a href="details.html?id=${jacket.id}">
                                    <img src="${jacket.image}" class="jacket-img" alt="${jacket.title}">
                                    <h3 id="jackets-title" class="jackets-title">${jacket.title}</h3>
                                    <p id="jackets-text" class="jackets-text">${jacket.description}</p>
                                    <p class="jackets-price"><span style="text-decoration:${textDecoration}">${jacket.price} kr.</span> <span class ="jackets-discount-price">${discount}</span></p>
                                  </a>
                                  </div>
                                  <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
                              </div>`;
      }
    });

     const ctaAdd = document.querySelectorAll("#add");

    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });
  }catch(error){
    catchAndDisplay("container","There has been an error in loading the page","error")
  }
}
fetchDeals()