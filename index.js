/* const btn = document.getElementsByTagName("button") */
const btn = document.querySelector(".button");
const quote = document.getElementById("adviceText");
const number = document.getElementById("adviceId");

console.log(btn);

const getAdvice = async function () {
  try {
    let response = await fetch(`https://api.adviceslip.com/advice`);

    if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
    quote.textContent = "\u201c" + data.slip.advice + "\u201d";
    number.textContent = data.slip.id;
  } catch(e) {
    console.log(e);
  }
};

window.addEventListener("load", function () {
  getAdvice();
});

btn.addEventListener("click", function () {
  getAdvice();
});


/* async function myFetch() {
    let response = await fetch(`https://api.adviceslip.com/advice`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
    return await response.json();
}
  
myFetch().then((data) => {
    quote.textContent = "\u201c" + data.slip.advice + "\u201d";
    number.textContent = "#" + data.slip.id;
}).catch(e => console.log(e)); */


"use strict";

const diceBtn = document.querySelector(".dice-btn");
const adviceNumber = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const apiUrl = "https://api.adviceslip.com/advice";

async function getAdvice() {
    // Request data
    try {
        let response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    } catch(e) {
        console.log(e);
      }
}

window.addEventListener("load", function() {
    getAdvice()
});

diceBtn.addEventListener('click', function() {
    getAdvice()
})

/* window.addEventListener("load", function(event) {
    buttonClickGET()
});

function buttonClickGET() {
    const url = "https://api.adviceslip.com/advice";
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            const  number = document.getElementById("adviceId");
            const advice = document.getElementById("adviceText");
            console.log(number.innerText);
            console.log(data.slip.id);
            if(number.innerText != data.slip.id) {
                console.log(number.innerText !== data.slip.id);
                number.innerText = data.slip.id;
                advice.innerText= data.slip.advice;
            } else {
                buttonClickGET()
            }
        })
    )
} */