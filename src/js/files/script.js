// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const menu = document.querySelector(".menu__list");
menu.addEventListener("mouseover", (event) => {
	if (event.target.classList.contains("menu__link")) {
		menu.style.setProperty(
      	"--underline-width",
      	`${event.target.offsetWidth}px`
    );
    menu.style.setProperty(
    	"--underline-offset-x",
      	`${event.target.offsetLeft}px`
    );
  }
});
menu.addEventListener("mouseleave", () =>
  	menu.style.setProperty("--underline-width", "0")
);