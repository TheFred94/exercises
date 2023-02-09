"use strict";

const bars = document.getElementById("bars");
const numbers = ["72", "38", "94", "2", "93", "100", "56", "65", "43", "11", "14", "77", "39", "90", "99", "71", "46", "36", "61", "87", "23", "80", "30", "15", "42", "66", "20", "95", "32", "70", "12", "92"];
const barElements = document.querySelectorAll(".bar");

updateBars();

function updateBars() {
  for (let i = 0; i < barElements.length; i++) {
    barElements[i].style.height = numbers[i] + "%";
  }
}

addRandomNumber();

function addRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 101);
  numbers.unshift(randomNumber);
  numbers.splice(32);
  if (numbers.lenght > 25) {
    numbers.push();
    console.log("pushed");
  }
  console.log(numbers);
}

function addRandomBars() {
  for (let i = 0; i <= 200; i++) {
    setTimeout(() => {
      if (bars.children.length < 32) {
        console.log("child removed");
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = numbers[0] + "%";
        bars.appendChild(bar);
        console.log(i);
        addRandomNumber();
      } else {
        bars.removeChild(bars.firstChild);
      }
    }, 1000 * i);
    console.log("bar added");
    numbers.push(Math.floor(Math.random()) * 100);
  }
}

addRandomBars();
