
export function fetchJacket(jacket){
  const container = document.querySelector(".details__container");

  const div = document.createElement("div");
  div.classList.add("details__text-container")

  const h2 = document.createElement("h2");
  h2.classList.add("details-header");
  h2.textContent =`${jacket.title} - ${jacket.baseColor}`;

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${jacket.image}`;
  img.alt = `${jacket.title}`;

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
  }

  const button = document.createElement("button");
  button.location = "bag.html";
  button.classList.add("cta-add");
  button.id = "add";
  button.textContent ="Add to bag";
  button.setAttribute("add-id", jacket.id);


  
  container.append(div);
  container.append(img)
  div.append(h2);
  div.append(detailsPrg);
  div.append(price);
  div.append(discount);
  div.append(button);

}