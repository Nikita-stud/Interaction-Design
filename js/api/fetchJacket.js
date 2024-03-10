export function fetchJacket(jacket){
  const container = document.querySelector(".details__container");

  const div = document.createElement("div");
  div.classList.add("details__text-container")

  const h2 = document.createElement("h2");
  h2.classList.add("details-header");
  h2.textContent =`${jacket.title}`;

  const color = document.createElement("p")
  color.classList.add("details-color")
  color.innerHTML =`Jackets Color: <span style="color:${jacket.baseColor}">${jacket.baseColor}</span>`;

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${jacket.image}`;
  img.alt = `${jacket.title}`;

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.textContent =`${jacket.description}`;

  const line = document.createElement("hr")
  line.classList.add("detail-line")

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
  button.classList.add("cta-add-details");
  button.id = "add";
  button.textContent ="Add to bag";
  //Here the setAttribute does not work 
  button.setAttribute("add-id", jacket.id);
  
  container.append(div);
  container.append(img)
  div.append(h2);
  div.append(price);
  div.append(color);
  div.append(discount);
  div.append(detailsPrg);
  div.append(line)
  div.append(button);
}