"use strict";
let iterator = 0;

let letter;
const typewriterText = document.getElementById("typewriter").textContent;
const maxNumberOfIterations = typewriterText.length;

initLoop();

function initLoop() {
  console.log("Loop initiated");

  loop();
}

function loop() {
  console.log(typewriterText[iterator]);
  iterator++;
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 200);
  }
}
