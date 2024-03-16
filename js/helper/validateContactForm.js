const formContact = document.getElementById("form-contact");
const errorContact = document.getElementById("error-contact");

const fullName = document.getElementById("full-name").value;
const email = document.getElementById("email-contact").value;
const subject= document.getElementById("subject").value;
const message = document.getElementById("message").value;

const errorName = document.getElementById("error-full-name")
const errorMail = document.getElementById("error-email")
const errorSubject = document.getElementById("error-subject")
const errorMessage = document.getElementById("error-message")


formContact.addEventListener("submit", (e) => {
  e.preventDefault()

  if(!fullName.value){
    errorName.innerText ="Please check first and last name";
  }
  if(!email){
    errorMail.innerText ="Valid email is required";
  }
  if (!subject){
    errorSubject.innerText ="Please fill out Subject";
  }
  if (!message){
    errorMessage.innerText ="Please fill out Message box";
  }


  // let messageContact =  [];

  // if (!fullName || firstName.value.trim < 4){
  //   messageContact.push("First and last name required")
  // }
  // if (!email.value || email.value < 2){
  //   messageContact.push("Valid email is required")
  // }
  // if (!subject.value || subject.value < 2){
  //   messageContact.push("Please fill out Subject")
  // }
  // if (!message.value || message.value < 10){
  //   messageContact.push("Please explain further")
  // }


  // if(messageContact.length > 0 && messageContact.length > 0){
  //   e.preventDefault()

  //   errorContact.innerText = messageContact.join("," + " ");

  // }else{
  //   window.location.href = "payment.html"
  // }


});


