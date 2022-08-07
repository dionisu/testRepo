"use strict";

let popup = document.querySelector(".pop_up");
let closer = document.querySelector(".pop_up_close");
let open = document.querySelector("#open_pop_up")
open.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("active");


})
closer.addEventListener("click", () => {
    popup.classList.remove("active");
})
document.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.classList.remove('active'); // Убираем активный класс с фона

    }
})