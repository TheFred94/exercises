"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  console.log("Ready to Color");
  addEvents();
}

const selector = document.querySelector("input");

// Runs the function and looks at the input and then runs the "handleUserInput" whenever there's an input.
function addEvents() {
  selector.addEventListener("input", handleUserInput);
}

// This function looks at the user input and stores the values as variables and then runs the show functions with those values as parameters
function handleUserInput() {
  // The "getUserColor" function is stored as the "userColor" variable
  const userColor = getUserColor();

  // The "convertHEXToRGB" function is stored in the variable "rgbValues" and thereby it's returned values as well.
  const rgbValues = convertHEXToRGB(userColor);

  //  Because they are returned in the "convertHEXToRGB" as an object we delcare r, g, b with rgbValues infront

  // These two variables are equal to the result of the "convertRGBToCSS" and takes the above const "rgbValues" as an argument.
  let cssColor = convertRGBToCSS(rgbValues.r, rgbValues.g, rgbValues.b);
  let hslValues = convertRGBToHSL(rgbValues.r, rgbValues.g, rgbValues.b);

  showHEX(userColor);
  showRGB(cssColor);

  showHSL(hslValues.h, hslValues.s, hslValues.l);
}

// Gives the input a value
//! In this case it gives a hex value
function getUserColor() {
  return selector.value;
}

// Looks at the "const rgbValues" which contains the function "convertHEXToRGB" with the "userColor" as the parameter.
// It's then redefined as an argument in the form of "hex"
// It takes the hex value from the "userColor" value and devides it into substrings and then returns an object with those values
function convertHEXToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

// Converts the r, g, b values from the object into a string e.g rgb(255, 255, 255)
function convertRGBToCSS(r, g, b) {
  let cssString = `rgb(${r}, ${g}, ${b})`;
  return cssString;
}

// Does something god knows what...
// it takes the r, g, b as parameters and converts them with witchcraft and black magic
// Oh yeah.. An it returns an object with h, s, l
function convertRGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  return { h, s, l };
}

// Shows the hex color in the html and styles the background according to the "userColor"
// ! It takes the "userColor" as a parameter
function showHEX(userColor) {
  document.querySelector("#hex").textContent = userColor;
  document.querySelector("section").style.backgroundColor = userColor;
}

// Basically does the same as the other show functions
function showRGB(cssRGBValues) {
  document.querySelector("#rgb").textContent = `${cssRGBValues}`;
}

// Pretty self explanatory
// Takes a parameter and shows the result in the html
function showHSL(h, s, l) {
  document.querySelector("#hsl").textContent = `${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
}
