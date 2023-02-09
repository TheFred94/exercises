"use strict";

const bars = document.getElementById("bars");
const numbers = [];

addRandomNumber();

function addRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 101);
  numbers.unshift(randomNumber);
  numbers.splice(40);
  console.log(numbers);
}

function addRandomBars() {
  for (let i = 0; i <= 40; i++) {
    setTimeout(() => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = numbers[0] + "px";
      bars.appendChild(bar);
      addRandomNumber();
      console.log(i);
    }, 500 * i);
    console.log("bar added");
    numbers.push(Math.floor(Math.random()) * 41);
  }
}

addRandomBars();
