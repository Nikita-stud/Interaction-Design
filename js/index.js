import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catch.js";

const container = document.querySelector(".horizontal-jackets__container");
// const addButton = document.querySelector(".cta-add");

async function getJackets(){
  try{
    const fetched = await fetch(url)
    const results = await fetched.json()
    const jackets = results;

    jackets.forEach(function(jacket){
      container.innerHTML += `<div class="horizontal-jackets__container">
                                <div class="jackets-text__container">
                                  <a href="details.html?id=${jacket.id}">
                                    <img src="${jacket.image}" class="jacket-img" alt="${jacket.description}">
                                    <h3 class="jackets-title">${jacket.title}</h3>
                                    <p class="jackets-text">${jacket.description}</p>
                                    <p class="jackets-price">${jacket.price}, kr</p>
                                  </a>
                                  <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
                                </div>
                              </div>`;
                              
    });

    const ctaAdd = document.querySelectorAll("#add");

    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });

  }catch(error){
    console.log(error);
    catchAndDisplay("","There has been an error in loading the page","error")
  }

  return;
}

getJackets()


function handleClick(event){
  const product = {id: event.target.dataset.id}
  const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
  favoriteList.push(product);
  localStorage.setItem("favorites", JSON.stringify(favoriteList));
}




// addButton.addEventListener("click", popup);

// function popup(){

// }