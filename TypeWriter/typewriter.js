"use strict";
let iterator = 0;
let maxNumberOfIterations;
let letter;
const typewriterText = document.getElementById("typewriter").textContent;

console.log(typewriterText);
initLoop();

function initLoop() {
  console.log("Loop initiated");
  maxNumberOfIterations = 20;

  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 200);
  }
}
