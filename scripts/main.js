
const myImages = document.querySelectorAll("img");

myImages.forEach((element) => element.addEventListener("click", () => {
  const mySrc = element.getAttribute("src");
  if (mySrc === "images/bonfire.png") {
    element.setAttribute("src", "images/kappa.jpg");
  } 
  if (mySrc === "images/kappa.jpg") {
    element.setAttribute("src", "images/bonfire.png");
  }
}));

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `こんにちわ ${myName}！カッパに興味がありますか?`;
  }
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `こんにちわ! ${storedName}さんを待っていた`;
  }
  

myButton.addEventListener("click", () => {
    setUserName();
  });

