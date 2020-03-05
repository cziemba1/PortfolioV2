const menu = document.querySelector("#menu");
const menuClose = document.querySelector(".menu-close");


menuClose.addEventListener("click", () => {
    menuClose.classList.toggle("open");
    menu.classList.toggle("open");
});








