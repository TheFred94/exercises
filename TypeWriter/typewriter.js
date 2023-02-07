"use strict";
let iterator = -1;

let letter;
let typewriterText;
const typewriter = document.getElementById("typewriter");
typewriterText = typewriter.textContent;
const maxNumberOfIterations = typewriterText.length;

initLoop();

function initLoop() {
  console.log("Loop initiated");

  loop();
}
typewriter.textContent = "";

function loop() {
  console.log(typewriterText[iterator]);
  iterator++;
  letter = "";
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 200);
    letter = typewriterText[iterator - 1];
    typewriter.textContent += letter;
  }
}
