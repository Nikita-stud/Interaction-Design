export function fetchJacketFilter(jacket){
    let discountedPriceString = "";
    if(jacket.discountedPrice >= jacket.price  && jacket.discountedPrice){
      discountedPriceString = jacket.discountedPrice;
      /* Price from createDetailsHTML */
      price.style.textDecoration = "line-through";
    }
    return;
}