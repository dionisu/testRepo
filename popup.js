let popupLinks = document.querySelectorAll(".popup-link");
let body = document.querySelector("body");
let timeout = 800;
let lockPadding = document.querySelectorAll(".lock-padding")
let unlock = true;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function(event) {
            let popupName = popupLink.getAttribute("href").replace("#", '');
            let currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            event.preventDefault();
        })
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        let popupActive = document.querySelector(".popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add("open");
        currentPopup.addEventListener("click", function(event) {
            if (event.target.closest(".popup__wrapper")) {
                popupClose(event.target.closest(".popup"))
            }
        })

    }
}

function bodyLock() {
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout)
}

function popupClose(popupActive) {
    popupActive.classList.remove("open");
}