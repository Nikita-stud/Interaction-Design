export function registerFormHandler(){
  const form = document.getElementById("form");

  
  function handleSubmit(e){
    e.preventDefault()

    const form = event.target;
    const formData = new FormData(form);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
  } 



  form.addEventListener("submit", handleSubmit);
}