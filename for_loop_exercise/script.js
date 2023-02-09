"use strict";

document.addEventListener("DOMContentLoaded", listeners);

function listeners() {
  const Btn1 = document.getElementById("1");
  const Btn2 = document.getElementById("2");
  const Btn3 = document.getElementById("3");
  const Btn4 = document.getElementById("4");
  const Btn5 = document.getElementById("5");
  const Btn6 = document.getElementById("6");
  const Btn7 = document.getElementById("7");
  Btn1.addEventListener("click", zeroToTen);
  Btn2.addEventListener("click", oneToTen);
  Btn3.addEventListener("click", tenToZero);
  Btn4.addEventListener("click", oneToNineteen);
  Btn5.addEventListener("click", bigNumber);
  Btn6.addEventListener("click", threeIncrements);
  Btn7.addEventListener("click", downFromAhundred);
}

// Counts from 0 - 9
function zeroToTen() {
  for (let counter = 0; counter < 10; counter++) {
    console.log(counter);
  }
}

// Counts from 1 - 10
function oneToTen() {
  for (let counter = 1; counter < 11; counter++) {
    console.log(counter);
  }
}

// Counts from 10 to 0 and the lifts off
function tenToZero() {
  for (let counter = 10; counter > -1; counter--) {
    console.log(counter);
  }
  console.log("liftoff");
}
// Counts from 1 - 19 in uneven numbers
function oneToNineteen() {
  for (let counter = 1; counter < 20; counter += 2) {
    console.log(counter);
  }
}
// Counts to 16777216 and doubles each time
function bigNumber() {
  for (let counter = 1; counter <= 16777216; counter *= 2) {
    console.log(counter);
  }
}

// Counts from 111 to 138 in increments of 3
function threeIncrements() {
  for (let counter = 111; counter < 139; counter += 3) {
    console.log(counter);
  }
}

// Counts down from 100 in increments of 10
function downFromAhundred() {
  for (let counter = 100; counter > 0; counter -= 10) {
    console.log(counter);
  }
}
