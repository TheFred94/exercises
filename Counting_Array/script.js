"use strict";

const arr = [];
let iterator = 0;

initLoop();

function initLoop() {
  console.log("initLoop");

  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  // Splice makes sure that the array is no longer than 9 chars
  arr.splice(8);
  // Unshit takes the newly generated item and places it first in the array
  arr.unshift(iterator);
  setTimeout(loop, 1000);
  console.log(arr);
}
