"use strict";

// document.addEventListener("DOMContentLoaded").button.addEventListener("click");

// Counts from 0 - 9
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}

// Counts from 1 - 10
for (let counter = 1; counter < 11; counter++) {
  console.log(counter);
}

// Counts from 10 to 0 and the lifts off
for (let counter = 10; counter > -1; counter--) {
  console.log(counter);
}
console.log("liftoff");

// Counts from 1 - 19 in uneven numbers
for (let counter = 1; counter < 20; counter += 2) {
  console.log(counter);
}

// Counts to 16777216 and doubles each time
for (let counter = 1; counter < 16777216; counter *= 2) {
  console.log(counter);
}

// Counts from 111 to 138 in increments of 3
for (let counter = 111; counter < 139; counter += 3) {
  console.log(counter);
}

// Counts down from 100 in increments of 10
for (let counter = 100; counter > 0; counter -= 10) {
  console.log(counter);
}
