"use strict";

const bars = document.getElementById("bars");
const numbers = [1, 38, 94, 2, 93, 100, 56, 65, 43, 11, 14, 77, 39, 90, 99, 71, 46, 36, 61, 87, 23, 80, 30, 15, 42, 66, 20, 95, 32, 70, 12, 92];
const barElements = document.querySelectorAll(".bar");

updateBars();
// Continuously generates a random number between 0 and 100 and adds it to the array
// while removing the first number
// Takes the value from the predefined array and show it as height % on load
function updateBars() {
  for (let i = 0; i < barElements.length; i++) {
    barElements[i].style.height = numbers[i] + "%";
  }
  document.querySelectorAll(".bar").forEach((div) => {
    div.classList.add("animation");
  });
  showData();
}

// Every second the data updates, generates a new number and
// While removing the first number in the array
function showData() {
  const randomNumber = Math.floor(Math.random() * 100);
  const newestBar = barElements[barElements.length - 1];
  newestBar.style.height = "0";
  newestBar.style.height = numbers[numbers.length - 1] + "%";
  newestBar.classList.add("new-bar-height");
  numbers.shift();
  console.log("Latest random number:", randomNumber);
  numbers.push(randomNumber);
  document.querySelector(".bar").addEventListener("animationiteration", updateBars);
  newestBar.addEventListener("transitionend", () => {
    newestBar.classList.remove("new-bar-height");
  });
}
