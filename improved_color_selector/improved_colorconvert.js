"use strict";
document.addEventListener("DOMContentLoaded", loadPage);

const selector = document.querySelector("input");

function loadPage() {
  selector.addEventListener("input", getUserColor);
}

// User input ------------------------------

// Returns the user color input
function getUserColor() {
  let userColor = selector.value;
  return userColor;
}

// Stores the getUserColor function in a variable
let userColor = getUserColor();

// Creates a variable that stores the convertHEXToRGB function and parses on the value from getUserColor as the "userColor" color variable
let fromHexToRgb = convertHEXToRGB(userColor);
console.log(userColor);

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

// Converts the RGB to CSS
function convertRGBToCSS() {}

// Converts the RGB to HEX
function convertRGBToHex() {}

// Converts the RGB to HSL
function convertRGBToHSL() {}

// Shows the HSL
function showHSL() {}

// Shows the RGB
function showRGB() {}

// Shows the HEX
function showHEX() {}

// Shows the colors in a box in the CSS
function showCSS() {}
