"use strict";
document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  console.log("Ready to Color");
  addEvents();
}
const selector = document.querySelector("input");

function addEvents() {
  selector.addEventListener("input", getUserColor);
}

//! User input ------------------------------
// Returns the user color input
function getUserColor() {
  let userColor = selector.value;
  return userColor;
}

// Stores the getUserColor function in a variable
let userColor = getUserColor();

// Runs the "showHEX" function with the "userColor" as parameter
showHEX(userColor);

// Creates a variable that stores the convertHEXToRGB function and parses on the value from getUserColor as the "userColor" color variable
let fromHexToRgb = convertHEXToRGB(userColor);
console.log(userColor);

convertRGBToCSS();

// Gets the color from "getUserColor" and converts it from a HEX to an RGB
function convertHEXToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  console.log("R", r);
  console.log("G", g);
  console.log("B", b);

  return { r, g, b };
}

// let cssColor = convertRGBToCSS(rgbValues);
// Converts the RGB to CSS
function convertRGBToCSS(r, g, b) {
  let cssString = `rgb(${r}, ${g}, ${b})`;
  return cssString;
}

// Converts the RGB to HEX
function convertRGBToHex() {}

// Converts the RGB to HSL
function convertRGBToHSL() {}

// Shows the HSL
function showHSL() {}

function showRGB() {}
// Shows the RGB

// Shows the HEX
function showHEX(userColor) {
  document.querySelector("#hex").textContent = `${userColor}`;
  document.querySelector("section").style.backgroundColor = `${userColor}`;
}

// Shows the colors in a box in the CSS
function showCSS() {}
