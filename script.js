
const checkBox = document.querySelector("#check");

let overlay = document.querySelector(".overlay");

window.addEventListener("resize", () => {
  let windowSize = window.innerWidth;

  if (windowSize > 800) {
    checkBox.checked = false;
    overlay.style.display = "none";
  }
});
let check= document.querySelector("#addr-checkbox")
let newadd= document.querySelector(".new-address-details");
check.addEventListener("change", () => {
 
    
    newadd.style.display=check.checked ? "block":"none";

});
