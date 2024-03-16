export function fetchJacket(jacket){
  const container = document.querySelector(".details__container");

  const div = document.createElement("div");
  div.classList.add("details__text-container")

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${jacket.image}`;
  img.alt = `${jacket.title}`;

  const h2 = document.createElement("h2");
  h2.classList.add("details-header");
  h2.textContent =`${jacket.title}`;

  const priceDiv =document.createElement("div")
  priceDiv.classList.add("details-price__container")

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.textContent =`${jacket.description}`;

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = ``;
  if(jacket.price >= jacket.discountedPrice){
    price.textContent = `kr ${jacket.price},-`;
  }

  const discount = document.createElement("p");
  discount.classList.add("details-discount");
  discount.textContent =``;
  if(jacket.price > jacket.discountedPrice){
    discount.textContent =`kr ${jacket.discountedPrice},-`;
    price.style.textDecoration= "line-through";
    price.style.opacity = "0.4"
  }

  const color = document.createElement("p")
  color.classList.add("details-color")
  color.innerHTML =`Jackets Color: <span style="color:${jacket.baseColor}">${jacket.baseColor}</span>`;

  const line = document.createElement("hr")
  line.classList.add("detail-line")

  const buttonsDiv =document.createElement("div")
  buttonsDiv.classList.add("details-buttons__container")

  const addButton = document.createElement("button");
  addButton.location = "bag.html";
  addButton.classList.add("cta-add-details");
  addButton.id = "add";
  addButton.innerHTML =`<i class="fa-solid fa-bag-shopping" id="bag__icon-details"></i>`;
  //Here the setAttribute does not work 
  addButton.setAttribute("add-id", jacket.id);

  const buyButton = document.createElement("button");
  buyButton.onclick = () => window.location = "checkout.html";
  buyButton.classList.add("cta-buy-details");
  buyButton.id = "buy";
  buyButton.textContent ="Buy now";

  
  container.append(div);
  container.append(img)
  div.append(h2);
  div.append(priceDiv)
  priceDiv.append(price)
  priceDiv.append(discount)
  div.append(color);
  div.append(detailsPrg);
  div.append(line)
  div.append(buttonsDiv)
  buttonsDiv.append(addButton);
  buttonsDiv.append(buyButton);
}