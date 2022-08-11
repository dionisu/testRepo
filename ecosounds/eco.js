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

let button = document.querySelector('.play');
let audio = document.querySelector('audio');

function music1() {
    if (audio.paused) {
        playAudio();
    } else pauseAudio()

    function playAudio() {
        audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        audio.currentTime = 0;
        audio.play();
    }

    function pauseAudio() {
        audio.pause();
    }

}



function toggle() {
    button.classList.toggle("pause")

}
button.addEventListener("click", toggle)
button.addEventListener("click", music1)

function music11() {
    audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
    audio.currentTime = 0;
    audio.play();
    button.classList.add('pause')
}
logo.addEventListener("click", music11)
let solovey = document.querySelector("[data-item='solovey']")
let drozd = document.querySelector("[data-item='drozd']")
let javoronok = document.querySelector("[data-item='javoronok']")
let slavka = document.querySelector("[data-item='slavka']")
document.addEventListener("click", function(e) {

    const target = e.target;

    if (target.dataset.item == "solovey") {
        target.classList.add('tops')
    }
    if (target.dataset.item !== 'solovey')
        solovey.classList.remove('tops')
    if (target.dataset.item == "drozd") {
        target.classList.add('tops')
    }
    if (target.dataset.item !== 'drozd')
        drozd.classList.remove('tops')
    if (target.dataset.item == "javoronok") {
        target.classList.add('tops')
    }
    if (target.dataset.item !== 'javoronok')
        javoronok.classList.remove('tops')
    if (target.dataset.item == "slavka") {
        target.classList.add('tops')
    }
    if (target.dataset.item !== 'slavka')
        slavka.classList.remove('tops')


})