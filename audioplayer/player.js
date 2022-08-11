'use strict';
let audio = new Audio();
let button = document.getElementById("play-pause");
let image = document.getElementById("thumbnail");
let prevBtn = document.querySelector("#previous-song");
let nextBtn = document.querySelector("#next-song");
let bg = document.querySelector("#background");
let progressBar = document.querySelector("#progress-bar");
let time = document.querySelector(".currentTime")
let durationTime = document.querySelector(".durationTime")
let title = document.querySelector(".song-title");
let artist = document.querySelector(".song-artist");
let currentTime = document.querySelector(".currentTime")
const songs = ['Beyonce', 'Dua Lipa'];
let index = 0;

function player() {
    audio.src = `assets2/audio/${songs[index]}.mp3`;
    image.src = `assets2/img/${index+1}.png`;
    bg.src = `assets2/img/${index+1}.png`
    artist.innerHTML = songs[index];
    if (index == 0) {
        title.innerHTML = "Don't Hurt Yourself"
    } else title.innerHTML = "Don't Start Now"

}
player(songs[index])


function playAudio() {

    audio.play();
    button.src = "assets2/svg/pause.png";
    image.style.transform = "scale(1.15)"
}

function pauseAudio() {
    audio.pause();
    button.src = "assets2/svg/play.png"
    image.style.transform = "scale(1)"
}

function playerPlay() {
    audio.paused ? playAudio() : pauseAudio();
}
button.addEventListener("click", playerPlay)


function nextsong() {
    index++;
    if (index > songs.length - 1) {
        index = 0;
    }
    player(songs[index]);
    playAudio();
}

function prevsong() {

    index--;
    if (index < 0)
        index = songs.length - 1;
    player(songs[index]);
    playAudio();

}


prevBtn.addEventListener("click", prevsong)
nextBtn.addEventListener("click", nextsong)

function barChange() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;

}
audio.addEventListener("timeupdate", barChange)

function changeTime() {
    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime - minutes * 60);

    if (seconds < 10) {
        currentTime.textContent = `${minutes}:0${seconds}`

    } else currentTime.textContent = `${minutes}:${seconds}`



}
audio.addEventListener("timeupdate", changeTime)

function click(e) {
    let width = progressBar.clientWidth
    let clik = e.offsetX;
    audio.currentTime = (clik / width) * audio.duration
}
progressBar.addEventListener("click", click)
audio.addEventListener("ended", nextsong)