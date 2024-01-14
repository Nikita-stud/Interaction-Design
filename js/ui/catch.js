export function catchAndDisplay(container, message, messageType){
  const inside = document.querySelector(container);
  inside.innerHTML =`<div class="message ${messageType}">${message}</div>`;
}