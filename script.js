"use strict";

let BUT_LEFT = document.querySelector(".circle1");
let BUT_RIGHT = document.querySelector(".circle3");
let carousel = document.querySelector(".carousel");

function moveleft() {
    carousel.classList.add("transition-left");
    BUT_LEFT.removeEventListener("click", moveleft)
    BUT_RIGHT.removeEventListener("click", moveright)
}

function moveright() {
    carousel.classList.add("transition-right");
    BUT_RIGHT.removeEventListener("click", moveright)
    BUT_LEFT.removeEventListener("click", moveleft)


}
BUT_LEFT.addEventListener("click", moveleft);
BUT_RIGHT.addEventListener("click", moveright)

carousel.addEventListener("animationend", function(animationEvent) {
    if (animationEvent.animationName === "move-left") {
        carousel.classList.remove("transition-left")
        const leftItem = document.querySelector(".spain").innerHTML;
        document.querySelector("#Jap").innerHTML = leftItem;
    } else {
        carousel.classList.remove("transition-right");

    }
    BUT_LEFT.addEventListener("click", moveleft);
    BUT_RIGHT.addEventListener("click", moveright)


})