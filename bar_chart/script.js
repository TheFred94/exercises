"use strict";

const bars = document.getElementById("bars");
const numbers = [72, 38, 94, 2, 93, 100, 56, 65, 43, 11, 14, 77, 39, 90, 99, 71, 46, 36, 61, 87, 23, 80, 30, 15, 42, 66, 20, 95, 32, 70, 12, 92];
const barElements = document.querySelectorAll(".bar");

updateBars();

// Takes the value from the predefined array and show it as height % on load
function updateBars() {
  for (let i = 0; i < barElements.length; i++) {
    barElements[i].style.height = numbers[i] + "%";
  }
}

// Every second the data updates, generates a new number and
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100);
  numbers.shift();
  console.log("Latest random number:", randomNumber);
  numbers.push(randomNumber);
  updateBars();
}, 1000);
