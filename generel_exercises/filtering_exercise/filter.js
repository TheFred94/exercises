"use strict";

const animals = [
  { name: "John", type: "cat" },
  { name: "Not John", type: "dog" },
  { name: "Peter", type: "cat" },
  { name: "Fletch", type: "fish" },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

console.log(isCat(animals));

function all() {
  return true;
}

function none() {
  return false;
}

console.log("ALL", animals.filter(all));
console.log("Cats", animals.filter(none));

console.log("Show me da bussy", animals.filter(isCat));
