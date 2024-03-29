const form = document.getElementById("form")
const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email")
const password = document.getElementById("password")
const country = document.getElementById("password")
const address = document.getElementById("address")
const city = document.getElementById("city")
const zip = document.getElementById("postal-code")

const errorRegistration =document.getElementById("error-registration")
const errorShipping = document.getElementById("error-shipping")

form.addEventListener("submit", (e) =>{
  let messageRegistration= [];
  let messageShipping = [];

  if (!firstName.value || firstName.value < 2){
    messageRegistration.push("First name is required")
  }
  if (!lastName.value || lastName.value < 2){
    messageRegistration.push("Last name is required")
  }

  // function validateEmail(email){
  //   const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   return re.test(String(email).toLowerCase());
  // }

  if (!email.value || email.value < 2){
    messageRegistration.push("Email is required")
  }
  if (email.value){
    validateEmail(email.value);
  }else{
    messageRegistration.push("Email requires one of `\{@\`");
  }
  
  if (!password.value || email.value < 6){
    messageRegistration.push("Password must be 5 or more characters")
  }
  if (!country.value || country.value < 2){
    messageShipping.push("Country is required")
  }
  if (!address.value || address.value < 4){
    messageShipping.push("Address is required")
  }
  if (!city.value || city.value < 2){
    messageShipping.push("City is required")
  }
  if (!zip.value || zip.value < 2){
    messageShipping.push("Zip is required")
  }

  if(messageRegistration.length > 0 && messageShipping.length > 0){
    e.preventDefault()

    errorRegistration.innerText = messageRegistration.join("," + " ");
    errorShipping.innerText = messageShipping.join("," + " ");
  }else{
    e.window.location = "payment.html"
  }

});
