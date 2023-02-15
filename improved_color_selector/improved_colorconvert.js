"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  console.log("Ready to Color");
  addEvents();
}

const selector = document.querySelector("input");

function addEvents() {
  selector.addEventListener("input", handleUserInput);
}

function handleUserInput() {
  const userColor = getUserColor();
  showHEX(userColor);

  const rgbValues = convertHEXToRGB(userColor);

  // ? Because they are returned in the "convertHEXToRGB" as an object we delcare r, g, b with rgbValues infront
  let cssColor = convertRGBToCSS(rgbValues.r, rgbValues.g, rgbValues.b);
  showRGB(cssColor);
}

function getUserColor() {
  return selector.value;
}

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

function showHEX(userColor) {
  document.querySelector("#hex").textContent = userColor;
  document.querySelector("section").style.backgroundColor = userColor;
}

function showRGB(cssRGBValues) {
  document.querySelector("#rgb").textContent = `${cssRGBValues}`;
}
