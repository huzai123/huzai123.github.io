
alert("Waring!What follows may cause physical discomfort.");
document.querySelector("html").addEventListener("click", function () {
    alert("What do you want to do with pinkie?");
  });
  let myImage = document.querySelector("img");

  myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pp.jpg") {
      myImage.setAttribute("src", "images/rarity.jpg");
    } else {
      myImage.setAttribute("src", "images/pp.jpg");
    }
  };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "love you," + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Why are you here again," + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
    