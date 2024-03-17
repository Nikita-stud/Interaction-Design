const signUpContainer = document.getElementById("signUpForm");
const formMain= document.getElementById("formMain");
const signHeader = document.getElementById("signHeader");


formMain.addEventListener("submit", (e) => {
  e.preventDefault()
  signUpContainer.innerHTML =`<div class="sign-up-success"><p>Your redeem code will be send out to you shortly</p></div>`;
  signHeader.style.display ="none";
});