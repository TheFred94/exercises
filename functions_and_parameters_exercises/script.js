"use strict";

// let myName = "Frederik";
// let anotherName = "Rømer";

// sayHello(myName, anotherName);

// function sayHello(lastName, firstName) {
//   console.log(`${firstName} ${lastName}`);
// }

// let firstName = "John";
// let animalType = "The Cat";
// let animalName = "Whiskers";

// presentPet(firstName, animalType, animalName);

// function presentPet(theName, type, actualName) {
//   console.log(`${theName} ${type} ${actualName}`);
// }

// Capitalization exercise
let theName = "FredeRiK";

capitalize(theName);

function capitalize(str) {
  console.log(`${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`);
}

// Name parts exercise

let myName = "Frederik Rømer Larsen";

getNameParts(myName);

function getNameParts(fullname) {
  let firstName = fullname.substring(0, fullname.indexOf(" "));
  let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);
  console.log(firstName, middleName, lastName);
}
