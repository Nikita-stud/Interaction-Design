const formContact = document.getElementById("form-contact");
const formContainer = document.getElementById("formContainer")


formContact.addEventListener("submit", (e) => {
  e.preventDefault()
  formContainer.innerHTML =`<div class="contact-success"><div class="success__circle"></div><p>Thank you for taking contact, we will answer your question as soon as possible</p></div>`;
});


