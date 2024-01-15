import { url } from "./constants.js";
import { handleClick } from "./helper/handleClick.js";

// const container = document.querySelector("#jackets__container");
const container = document.querySelector(".spes-jacket__rows");

async function fetchJackets(){
  const fetched = await fetch(url);
  const results = await fetched.json();

  container.innerHTML= "";

  results.forEach(function(jacket){
      container.innerHTML += `<div id="horizontal-jackets__container" class="horizontal-jackets__container">
                              <div id="jackets-text__container" class="jackets-text__container">
                                <a href="details.html?id=${jacket.id}">
                                  <img src="${jacket.image}" id="jacket-img" alt="${jacket.title}">
                                  <h3 id="jackets-title" class="jackets-title">${jacket.title}</h3>
                                  <p id="jackets-text" class="jackets-text">${jacket.description}</p>
                                  <p id="jackets-price">${jacket.price}, kr</p>
                                </a>
                                </div>
                                <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
                            </div>`;
    
  });

  const ctaAdd = document.querySelectorAll("#add");

  ctaAdd.forEach(function(button){
    button.addEventListener("click", handleClick);
  });
}
fetchJackets()