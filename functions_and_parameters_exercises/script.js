"use strict";

// let myName = "Frederik";
// let anotherName = "Rømer";

// sayHello(myName, anotherName);

// function sayHello(lastName, firstName) {
//   console.log(`${firstName} ${lastName}`);
// }

let firstName = "John";
let animalType = "The Cat";
let animalName = "Whiskers";

presentPet(firstName, animalType, animalName);

function presentPet(theName, type, actualName) {
  console.log(`${theName} ${type} ${actualName}`);
}

// Capitalization exercise
let theName = "FredeRiK";

capitalize(theName);

function capitalize(str) {
  console.log(`${str}`.substring(0, 1).toUpperCase() + `${str}`.substring(1).toLowerCase());
}
