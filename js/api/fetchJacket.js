export function fetchJacket(jacket){
  const container = document.querySelector(".details__container");

  // const div = document.createElement("div");
  // div.classList.add("details__")

  const h1 = document.createElement("h1");
  h1.classList.add("details-header");
  h1.textContent =`${jacket.title} - ${jacket.baseColor}`;

  const img = document.createElement("img");
  img.classList.add("details-img");
  img.src =`${jacket.image}`;
  img.alt = `${jacket.title}`;

  const detailsPrg = document.createElement("p");
  detailsPrg.classList.add("details-description");
  detailsPrg.textContent =`${jacket.description}`;

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = `kr ${jacket.price},-`;

  const discount = document.createElement("p");
  discount.classList.add("details-discount");
  discount.textContent =`kr ${jacket.discountedPrice},-`;
  
  container.append(h1);
  container.append(img)
  container.append(detailsPrg);
  container.append(price);
  container.append(discount);
}