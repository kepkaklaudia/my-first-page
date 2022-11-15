{
  const welcome = () => {
    console.log("Witaj na mojej pierwszej stronie intenetowej!");
  }

  const init = () => {
    backgroundButtonElement.addEventListener("click", toggleBackground);
    mobileBackgroundButtonElement.addEventListener("click", toggleMobileBackground);
    const menuButtonElement = document.querySelector(".js-button--menu");
    menuButtonElement.addEventListener("click", showMenu);
    window.addEventListener("click", hideMenu);
    welcome();
  }

  const backgroundButtonElement = document.querySelector(".js-button");
  const headerElement = document.querySelector(".header");
  const mobileBackgroundButtonElement = document.querySelector(".js-button--background");

  const toggleBackground = () => {
    backgroundButtonElement.classList.toggle("background--button");
    document.body.classList.toggle("background");
    headerElement.classList.toggle("background");
    backgroundButtonElement.innerText === "Włącz różowe tło" ? backgroundButtonElement.innerText = "Włącz błękitne tło" : backgroundButtonElement.innerText = "Włącz różowe tło";
  }
  const toggleMobileBackground = () => {
    document.body.classList.toggle("background");
    headerElement.classList.toggle("background");
    mobileBackgroundButtonElement.innerText === "Włącz różowe tło" ? mobileBackgroundButtonElement.innerText = "Włącz błękitne tło" : mobileBackgroundButtonElement.innerText = "Włącz różowe tło";
  }

{
  const myLink = document.querySelectorAll(".navigation__item");
  showMenu = () => {
    for (let i = 0; i < myLink.length; i++) {
      myLink[i].classList.toggle("active")
    };
  }

  hideMenu = (hide) => {
    if (!hide.target.matches(".js-button--menu")) {
      for (i = 0; i < myLink.length; i++) {
        if (myLink[i].classList.contains('active')) {
          myLink[i].classList.remove('active');
        }
      }
    }
  }
}
  init();
}
