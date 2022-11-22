{
  const welcome = () => {
    console.log("Witaj na mojej pierwszej stronie intenetowej!");
  }

  const backgroundButtonElement = document.querySelector(".js-button");
  
  const toggleBackground = () => {
    const bodyElement = document.querySelector(".js-body");
    bodyElement.classList.toggle("background");

  }

  const toggleButtonText = () => {
    backgroundButtonElement.innerText === "Włącz różowe tło" ? backgroundButtonElement.innerText = "Włącz błękitne tło" : backgroundButtonElement.innerText = "Włącz różowe tło";
  }

  {
    const myLink = document.querySelectorAll(".navigation__item");
    showMenu = () => {
      for (let i = 0; i < myLink.length; i++) {
        myLink[i].classList.toggle("active")
      };
    }

    hideMenu = (hide) => {
      if (!hide.target.matches(".js-buttonMenu")) {
        for (i = 0; i < myLink.length; i++) {
          if (myLink[i].classList.contains("active")) {
            myLink[i].classList.remove("active");
          }
        }
      }
    }
  }
  const init = () => {
    const menuButtonElement = document.querySelector(".js-buttonMenu");
    backgroundButtonElement.addEventListener("click", toggleBackground);
    backgroundButtonElement.addEventListener("click", toggleButtonText);
    menuButtonElement.addEventListener("click", showMenu);
    window.addEventListener("click", hideMenu);
    welcome();
  }

  init();
}
