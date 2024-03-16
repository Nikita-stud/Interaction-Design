// import { registerFormHandler } from "../handler/registerFormHandler";


const form = document.getElementById("form");

const firstName = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const country = document.getElementById("country");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zip = document.getElementById("postal-code");

const errorRegistration =document.getElementById("error-registration");
const errorShipping = document.getElementById("error-shipping");




form.onsubmit = (e) =>{

  let messageRegistration= [];
  let messageShipping = [];

   //Register name for checkout 

  if(!firstName.value || firstName.value < 2 ){
  messageRegistration.push("First name is required")
  }
  if (!lastName.value || lastName.value < 2){
    messageRegistration.push("Last name is required")
  }
  if (!email.value || email.value < 4){
    messageRegistration.push("Email is required")
  }
  if (!password.value || email.value < 6){
    messageRegistration.push("Password must be 6 or more characters")
  }

  //Register address for checkout 

  if (!country.value || country.value < 2){
    messageShipping.push("Country is required")
  }
  if (address.value <= 4 || !address.value){
    messageShipping.push("Address is required")
  }
  if (!city.value){
    messageShipping.push("City is required")
  }
  if (!zip.value){
    messageShipping.push("Zip is required")
  }else if (isNaN(zip.value)){
    messageShipping.push("Postal code must be a number")
  }

   //Error push

  if(messageRegistration.length > 0 && messageShipping.length > 0){
    e.preventDefault()

    errorRegistration.innerText = messageRegistration.join("," + " ");
    errorShipping.innerText = messageShipping.join("," + " ");
  }
  // else(messageRegistration.length == 0 || messageShipping.length == 0){
  //   window.location = "payment.html";
  // }
};
