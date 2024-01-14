import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catch.js";

const container = document.querySelector("#jackets__container");

async function getJackets(){
  try{
    const fetched = await fetch(url)
    const results = await fetched.json()
    const jackets = results;


    container.innerHTML = "";

    jackets.forEach(function(jacket){
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

      const jacketTitle = document.querySelector("#jackets-title");
      
      // if(jacket.title.length <= 24){
      //   jacketTitle.style.paddingBottom = "10px";
      // }
                              
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