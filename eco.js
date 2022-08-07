"use strict";
let lis = document.querySelectorAll("li");
let logo = document.querySelector('logo ');
for (let li of lis) {
    if (li.dataset.item == 'solovey') {
        li.addEventListener("click", function(e) {
            document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/solovey.jpg)";


        })
    }
    if (li.dataset.item == 'drozd') {
        li.addEventListener("click", function(e) {
            document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/drozd.jpg)";

        })
    }
    if (li.dataset.item == 'zarynka') {
        li.addEventListener("click", function(e) {
            document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/zarynka.jpg)";
        })
    }
    if (li.dataset.item == 'javoronok') {
        li.addEventListener("click", function(e) {
            document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/javoronok.jpg)";
        })
    }
    if (li.dataset.item == 'slavka') {
        li.addEventListener("click", function(e) {
            document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/slavka.jpg)";
        })
    }

}
logo.addEventListener("click", function() {
    document.querySelector("main").style.backgroundImage = "url(./rsschool-cv/assets/img/forest.jpg)"
})