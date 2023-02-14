"use strict";
console.log("Hello World");

document.querySelector("button").addEventListener("click", randomBackground);

// Runs the function randomBackground with no parameters
// Styles the body background as a random color with the randomColor function as the parameter for the rgbToCss
//
function randomBackground() {
  document.body.style.backgroundColor = rgbToCSS(randomColor());
}

// Generates a random color and convert it to an object in the return statement.
function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return { red, green, blue };
}

console.log(randomColor());

// Takes the return statement as an parameter for the rgbToCss function.
// Defines two variables objectColor and cssString
// Object color is a variable that can be used by the cssString variable
// The cssString converts the objectColor into a string that can be used to style the background in CSS
function rgbToCSS({ red, green, blue }) {
  let objectColor = { red, green, blue };
  let cssString = `rgb(${objectColor.red}, ${objectColor.green}, ${objectColor.blue})`;

  return cssString;
}
