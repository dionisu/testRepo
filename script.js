"use strict"

function partial(func, ...argsBound) {
    return function(...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

// использование:
let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

