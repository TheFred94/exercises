"use strict";

const bars = document.getElementById("bars");
const numbers = [];

addRandomNumber();

function addRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 101);
  numbers.unshift(randomNumber);
  if (numbers.lenght > 40) {
    numbers.pop();
  }
  console.log(numbers);
}

function addRandomBars() {
  for (let i = 0; i <= 200; i++) {
    setTimeout(() => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = numbers[0] + "%";
      bars.appendChild(bar);
      addRandomNumber();
      console.log(i);
      if (bars.children.length > 40) {
        bars.removeChild(bars.firstChild);
      }
    }, 500 * i);
    console.log("bar added");
    numbers.push(Math.floor(Math.random()) * 41);
  }
}

addRandomBars();
