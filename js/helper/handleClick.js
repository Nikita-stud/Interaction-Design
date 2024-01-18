export function handleClick(event){
  const product = {id: event.target.dataset.id}
  const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
  favoriteList.push(product);
  localStorage.setItem("favorites", JSON.stringify(favoriteList));
}
