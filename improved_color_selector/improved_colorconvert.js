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
function convertRGBToCSS(rgb) {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

// Converts the RGB to HEX
function convertRGBToHex(rgb) {
  let rHex = rgb.r.toString(16).padStart(2, "0");
  let gHex = rgb.g.toString(16).padStart(2, "0");
  let bHex = rgb.b.toString(16).padStart(2, "0");

  return `#${rHex}${gHex}${bHex}`;
}

// Converts the RGB to HSL
function convertRGBToHSL(rgb) {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let delta = max - min;

  let h, s, l;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;

  if (delta === 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
  }

  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

// Shows the HSL
function showHSL(hsl) {
  console.log(`HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`);
}

// Shows the RGB
function showRGB(rgb) {
  console.log(`RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`);
}

// Shows the HEX
function showHEX(hex) {
  document.querySelector("#hex").textContent = "hex";
  console.log(hex);
}

// Shows the colors in a box in the CSS
function showCSS(css) {
  document.querySelector("section").style.backgroundColor = "red";
}
