const socialMediaHeading = document.querySelector("#Head");
socialMediaHeading.style.color = "blue";
 
const TechnologyStack = document.querySelector("h2");
TechnologyStack.style.color = "Red";
TechnologyStack.style.fontFamily = "Arial";

let parentList = document.querySelector("#TC ul");
let childItem = document.getElementById("mainone");
parentList.removeChild(childItem);