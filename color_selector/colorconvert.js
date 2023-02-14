"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  console.log("Ready to color");
  addEvents();
}

const selector = document.querySelector("input");

function addEvents() {
  selector.addEventListener("input", getColors);
}
function getColors() {
  // Takes the value from the color input and stores it in "hex"
  hex = selector.value;

  // The function calculateRGB will receive the value from "hex" from this function, when used as a parameter for the function
  calculateRGB(hex);
}

// This function uses the parameter from the getColors function
function calculateRGB(hex) {
  console.log(hex);

  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

  console.log("R", r);
  console.log("G", g);
  console.log("B", b);
  // Brings the values from the r, g, b from this function over to the convertRGBtoHSL when used as a parameter in that function
  convertRGBtoHSL(r, g, b);
  showColors(hex, r, g, b);
}

// This takes the values of the r, g, b from the previous function and does math with it
function convertRGBtoHSL(r, g, b) {
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

  console.log(h, s, l);
  showColors(h, s, l);
  document.querySelector("#hsl").textContent = `${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
}
function showColors(hex, r, g, b, h, s, l) {
  document.querySelector("section").style.backgroundColor = hex;
  document.querySelector("#hex").textContent = `${hex}`;
  document.querySelector("#rgb").textContent = `${r}, ${g}, ${b}`;
}
