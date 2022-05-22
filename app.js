"use strict";

const diceBtn = document.querySelector(".dice-btn");
const adviceNumber = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const apiUrl = "https://api.adviceslip.com/advice";

function getAdvice() {
    // Request data
    fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
        // inject to dom
        adviceNumber.textContent = dataId;
        adviceText.textContent = dataAdvice;
    });
}

window.addEventListener("load", function() {
    getAdvice()
});

diceBtn.addEventListener('click', function() {
    getAdvice()
})

