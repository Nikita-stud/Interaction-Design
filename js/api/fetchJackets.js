export function fetchJackets(jackets){
  const container = document.querySelector("#jackets__container");

  jackets.forEach(function(jacket){

    let discount = "";
    let textDecoration = ""

    if(jacket.price > jacket.discountedPrice){
      discount = jacket.discountedPrice;
      textDecoration ="line-through";
    }


    container.innerHTML += `<div class="horizontal-jackets__container">
                              <div class="jackets-text__container">
                                <a href="details.html?id=${jacket.id}">
                                  <img src="${jacket.image}" class="jacket-img" alt="${jacket.title}">
                                  <h3 class="jackets-title">${jacket.title}</h3>
                                  <p class="jackets-text">${jacket.description}</p>
                                  <p class="jackets-price"><span style="text-decoration:${textDecoration}">${jacket.price} kr.</span> <span class ="jackets-discount-price">${discount}</span></p>
                                </a>
                                </div>
                                <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
                            </div>`;
  });
}


// Tried doing the code with createElement but that did not work!!! (This version has one less span in the paragraph, but it does not ruin the code)

// export function fetchJackets(jackets){
//   const container = document.querySelector("#jackets__container");

//   const div = document.createElement("div");
//   div.classList.add("horizontal-jackets__container")
//   div.id ="horizontal-jackets__container"

//   const insideDiv = document.createElement("div")
//   insideDiv.classList.add("jackets-text__container");
//   insideDiv.id = "jackets-text__container"

//   const click = document.createElement("a");
//   click.href = `details.html?id=${jackets.id}`;

//   const img = document.createElement("img");
//   img.classList.add("jacket-img");
//   img.id ="jacket-img";
//   img.src =`${jackets.image}`;
//   img.alt = `${jackets.title}`;

//   const h3 = document.createElement("h3");
//   h3.classList.add("jackets-title");
//   h3.id ="jackets-title";
//   h3.textContent =`${jackets.title}`;

//   const detailsPrg = document.createElement("p");
//   detailsPrg.classList.add("jackets-text");
//   detailsPrg.id = "jackets-text";
//   detailsPrg.textContent =`${jackets.description}`;

//   const price = document.createElement("p");
//   price.classList.add("jackets-price");
//   price.textContent = ``;
//   if(jackets.price >= jackets.discountedPrice){
//     price.textContent = `kr ${jackets.price},-`;
//   }

//   const discount = document.createElement("span");
//   discount.classList.add("jackets-discount-price");
//   discount.textContent =``;
//   if(jacket.price > jackets.discountedPrice){
//     discount.textContent =`kr ${jackets.discountedPrice},-`;
//     price.style.textDecoration= "line-through";
//   }

//   const button = document.createElement("button");
//   button.location = "bag.html";
//   button.classList.add("cta-add");
//   button.id = "add";
//   button.textContent ="Add to bag";
//   button.setAttribute("date-id", jackets.id);
  
//   container.append(div);
//   div.append(insideDiv);
//   insideDiv.append(click);
//   click.append(img);
//   click.append(h3);
//   click.append(detailsPrg);
//   click.append(price);
//   price.append(discount);
//   div.append(button);
// }