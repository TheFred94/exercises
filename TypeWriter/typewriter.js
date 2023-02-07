"use strict";
let iterator = -1;

let letter;
let typewriterText;
const typewriter = document.getElementById("typewriter");
typewriterText = typewriter.textContent;
const maxNumberOfIterations = typewriterText.length;

function ranSound() {}

// Runs the initLoop which runs the loop
initLoop();

function initLoop() {
  console.log("Loop initiated");

  loop();
}
// Empties the container with the text
typewriter.textContent = "";

// Runs the loop every 200ms
function loop() {
  ranSound = Math.floor(Math.random() * 2) + 1;
  console.log(ranSound);
  console.log(typewriterText[iterator]);
  iterator++;
  letter = "";
  if (iterator <= maxNumberOfIterations) {
    setTimeout(loop, 300);
    letter = typewriterText[iterator - 1];
    typewriter.textContent += letter;
    if (letter === " ") {
      document.querySelector("#typespace").currentTime = 0;
      document.querySelector("#typespace").play();
    } else {
      document.querySelector(`#typekey${ranSound}`).play();
      document.querySelector(`#typekey${ranSound}`).currentTime = 0;
      setTimeout(document.querySelector("#typekey") + ranSound) + 50;
    }
  } else {
    document.querySelector("#typereturn").volume = 1;
    document.querySelector("#typereturn").currentTime = 0;
    document.querySelector("#typereturn").play();
    console.log("Return");
  }
}
