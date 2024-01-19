export function fetchJackets(jackets){
  const container = document.querySelector("#jackets__container");

  jackets.forEach(function(jacket){

    let discount = "";
    if(jacket.price > jacket.discountedPrice){
      discount = jacket.discountedPrice;
    }

    container.innerHTML += `<div id="horizontal-jackets__container" class="horizontal-jackets__container">
                              <div id="jackets-text__container" class="jackets-text__container">
                                <a href="details.html?id=${jacket.id}">
                                  <img src="${jacket.image}" id="jacket-img" alt="${jacket.title}">
                                  <h3 id="jackets-title" class="jackets-title">${jacket.title}</h3>
                                  <p id="jackets-text" class="jackets-text">${jacket.description}</p>
                                  <p class="jackets-price">${jacket.price} kr. <span class ="jackets-discount-price">${discount}</span></p>
                                </a>
                                </div>
                                <button href="bag.html" id="add" class="cta-add" data-id=${jacket.id}>Add to bag</button>
                            </div>`;
  });
  localStorage()
}