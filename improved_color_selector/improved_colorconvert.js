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
  let hslValues = convertRGBToHSL(rgbValues.r, rgbValues.g, rgbValues.b);
  showRGB(cssColor);
  showHSL(hslValues.h, hslValues.s, hslValues.l);
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

function showHEX(userColor) {
  document.querySelector("#hex").textContent = userColor;
  document.querySelector("section").style.backgroundColor = userColor;
}

function showRGB(cssRGBValues) {
  document.querySelector("#rgb").textContent = `${cssRGBValues}`;
}

function showHSL(h, s, l) {
  document.querySelector("#hsl").textContent = `${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%`;
}
