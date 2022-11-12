console.log("Cześć!");

let buttonElement = document.querySelector(".js-button");
let backgroundButtonElement = document.querySelector(".js-button--background");
let myLink = document.querySelectorAll(".navigation__item");
let menuButtonElement = document.querySelector(".js-button--menu");
let headerElement = document.querySelector(".header");

buttonElement.addEventListener("click", () => {
  document.body.classList.toggle("background");
  headerElement.classList.toggle("background");
  buttonElement.classList.toggle("background--button");
  if (buttonElement.innerText === "Włącz różowe tło") {
    buttonElement.innerText = "Włącz błękitne tło";
  }
  else{
    buttonElement.innerText = "Włącz różowe tło";
}
});

backgroundButtonElement.addEventListener("click", () => {
  document.body.classList.toggle("background");
  headerElement.classList.toggle("background");
  /*switch (backgroundButtonElement.innerText) {
    case "Włącz różowe tło":
      backgroundButtonElement.innerText="Włącz błękitne tło";
    break;
    default:
      backgroundButtonElement.innerText="Włącz różowe tło";
  }*/

  backgroundButtonElement.innerText === "Włącz różowe tło" ? backgroundButtonElement.innerText = "Włącz błękitne tło" : backgroundButtonElement.innerText = "Włącz różowe tło";

});

menuButtonElement.addEventListener("click", () => {
  for (let i = 0; i < myLink.length; i++) {
    myLink[i].classList.toggle("active");
  }

  window.onclick = function(event) {
    if (!event.target.matches(".js-button--menu")) {
      for (i = 0; i < myLink.length; i++) {
        if (myLink[i].classList.contains('active')) {
          myLink[i].classList.remove('active');
        }
      }
  }
  }
});


