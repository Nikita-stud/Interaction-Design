export function handleClick(event){
  const product = {id: event.target.dataset.id}
  const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
  favoriteList.push(product);
  localStorage.setItem("favorites", JSON.stringify(favoriteList));

  //Add to Card -- Delete after IxD
 
  const bagIcon = document.getElementById("bagIcon");
  const amountFav = localStorage.getItem("favorites");

  if (amountFav.length > 0){
    bagIcon.style.color ="#c91313ee";
  }
}
