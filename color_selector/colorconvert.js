"use strict";

document.addEventListener("DOMContentLoaded", loadPage);
const selector = document.querySelector("input");
let hex, r, g, b, h, s, l;

function loadPage() {
  console.log("Let's get coloring");
  selector.addEventListener("input", loadHexColor);
  loadHexColor();
}

function loadHexColor() {
  hex = selector.value;
  console.log(hex);
  calculateRGB(hex);
  displayColors(hex, r, g, b, h, s, l);
  calculateHSL(r, g, b);
}

function displayColors(hex, r, g, b, h, s, l) {
  document.querySelector("#hex").textContent = `${hex}`;
  document.querySelector("#rgb").textContent = `(${r}, ${g}, ${b})`;
  document.querySelector("#hsl").textContent = `(${h}, ${s}%, ${l}%)`;
}

function calculateRGB(hex) {
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 3), 16);
  b = parseInt(hex.substring(5, 7), 16);
  console.log(r, g, b);
}

function calculateHSL(r, g, b) {
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
}
