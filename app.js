const burgerClose = document.querySelector("#close");

burgerClose.addEventListener("click", closeBurger);

let closeBurger = function () {
    burgerClose.classList.remove("burger-menu")
}