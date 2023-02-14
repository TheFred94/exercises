"use strict";
// !Return Values experiment #1

// let result = greeting("Peter");

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// console.log(result);

//! Return Values experiment #2.1
// ? The function os just called greeting("any name")
// * Expected result = Hello Peter
// let result = greeting("Peter");

// greeting("any name");

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// console.log(result);

//! Return Values experiment #2.2
// ? The function is called in a console.log like so: console.log(greeting("any name"));
// * Expected result = Hello any name
// let result = greeting("Peter");

// greeting("any name");

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// console.log(greeting("any name"));

// ! Return Values experiment #2.3
// ? The function is called without any parameter
// * Expected result = firstName is not defined
// let result = greeting("Peter");

// greeting("any name");

// function greeting() {
//   return `Hello ${firstName}`;
// }
// console.log(greeting("any name"));

// ! Return Values experiment #2.4
// ? The function is called inside a template literal
// * Expected results = ???

// const text = `Greeting is ${greeting("a name")}`;

// greeting("any name");

// function greeting() {
//   return `Hello ${firstName}`;
// }
// console.log(greeting("any name"));

// ! Exercise - capitalize string
// Creates a const with the name
const myName = "frederIK";

// Stores the capitalize function in a variable
const capLet = capitalize(`${myName}`);

console.log(capLet);

// When the return function is met, it returns the value to the capLet variable
function capitalize(str) {
  return `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;
}

// ! Exercise - fullname
// This is an example of the same use of returning a function, only a bit more complex
const theName = "peter heronimous lind";

const nameParts = getNameParts(`${theName}`);

function getNameParts(fullname) {
  let firstName = fullname.substring(0, fullname.indexOf(" "));
  let middleName;
  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);
  if ((middleName = fullname.substring(fullname.indexOf(" "), fullname.lastIndexOf(" ")) === "")) {
    middleName = undefined;
  } else {
    middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
  }
  // return `${lastName} ${middleName} ${firstName}`;
  // return `${firstName} ${middleName} ${lastName} `;
  return `${middleName.substring(0, 1).toUpperCase()}${middleName.substring(1).toLowerCase()} ${lastName.substring(0, 1).toUpperCase()}${lastName.substring(1).toLowerCase()} ${firstName.substring(0, 1).toUpperCase()}${firstName.substring(1).toLowerCase()}`;
}

console.log(nameParts);
