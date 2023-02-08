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
  arr.splice(8);
  arr.unshift(iterator);
  setTimeout(loop, 1000);
  console.log(arr);
}
