import {url} from "./constants.js";
// import {catchAndDisplay} from "./ui/catchAndDisplay.js";
import { handleClick } from "./helper/handleClick.js";
import { fetchData } from "./api/fetchData.js";
import { fetchJackets } from "./api/fetchJackets.js";

const container = document.querySelector("#jackets__container");

async function getJackets(){
  try{
    const jackets = await fetchData(url);

    container.innerHTML = "";
    
    fetchJackets(jackets);
                            
    const ctaAdd = document.querySelectorAll("#add");
    ctaAdd.forEach(function(button){
      button.addEventListener("click", handleClick);
    });
  }catch(error){
    container.innerHTML = `<div class="error">There has been an error</div>`;
  }
}
getJackets()