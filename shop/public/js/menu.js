document.querySelector(".overlay__menu__open__btn").onclick = function () {
    document.querySelector(".overlay").classList.add("overlay-open");
}

document.querySelector(".overlay__menu__close__btn").onclick = function () {
    document.querySelector(".overlay").classList.remove("overlay-open");
}