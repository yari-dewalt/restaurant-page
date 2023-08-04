import { loadhomepage } from "./page-load";
import { createNavBar } from "./page-load";
import { clearContent } from "./page-load";
console.log("test");

createNavBar();

const home = document.getElementById("home");
home.addEventListener("click", () => {
    loadhomepage();
})

loadhomepage();