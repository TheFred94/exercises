"use strict";
let iterator = -1;

let letter;
let typewriterText;
const typewriter = document.getElementById("typewriter");
typewriterText = typewriter.textContent;
const maxNumberOfIterations = typewriterText.length - 1;

initLoop();

function initLoop() {
  console.log("Loop initiated");

  loop();
}

function loop() {
  console.log(typewriterText[iterator]);
  iterator++;
  letter = "";
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 200);
    letter = typewriterText[iterator];
    typewriter.textContent += letter;
  }
}
