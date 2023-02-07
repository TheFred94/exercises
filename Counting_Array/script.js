"use strict";

let arr = [];
let iterator = 0;
let maxNumberOfIterations;
initLoop();

function initLoop() {
  console.log("initLoop");
  maxNumberOfIterations = 10;

  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  if (iterator < maxNumberOfIterations) {
    arr.unshift(iterator);
    setTimeout(loop, 1000);
    console.log(arr);
  }
}
