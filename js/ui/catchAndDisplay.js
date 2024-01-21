export function catchAndDisplay(container="#jackets__container", message ="There was an unexpected error", messageType ="error"){
  const inside = document.querySelector(container);
  inside.innerHTML =`<div class="message ${messageType}">${message}</div>`;
}
