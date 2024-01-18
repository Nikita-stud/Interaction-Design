import {url} from "./constants.js";
import {catchAndDisplay} from "./ui/catchAndDisplay.js";
import {getQueryParam} from "./helper/getQueryParam.js";
import { fetchJacket } from "./api/fetchJacket.js";

const detailsContainer = document.querySelector(".details__container");

const id = getQueryParam("id");
const jacketUrl = `${url}/${id}`;
if(!id){
  window.location.href="/";
}

async function getJacket(){
  try{
    const fetched = await fetch(jacketUrl);
    const results = await fetched.json();

    detailsContainer.innerHTML ="";

    fetchJacket(results);

  }catch(error){
    catchAndDisplay(".details__container","There has been an error in loading the page","error")
  }

}
getJacket()