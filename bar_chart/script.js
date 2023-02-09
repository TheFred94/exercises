"use strict";

const bars = document.getElementById("bars");

addRandomBars();

function addRandomBars() {
  for (let i = 0; i <= 39; i++) {
    setTimeout(() => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bars.appendChild(bar);
      console.log(i);
    }, 500 * i);
    console.log("bar added");
  }
}
