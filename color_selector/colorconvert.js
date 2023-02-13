"use strict";

convertToRGB("rgb(12, 56, 223)");

function convertToRGB(cssCol) {
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));

  console.log(numberStr);

  let colorSplit = numberStr.split(",");

  console.log(colorSplit);

  let r = parseInt(colorSplit[0].trim(0));
  let g = parseInt(colorSplit[1].trim(0));
  let b = parseInt(colorSplit[2].trim(0));

  console.log("R", r);
  console.log("G", g);
  console.log("B", b);

  let hexColor = convertRGBtoHEX(r, g, b);

  console.log(`RGB: (${r}, ${g}, ${b}) => HEX: ${hexColor}`);
}

function convertRGBtoHEX(r, g, b) {
  r = padZero(r.toString(16));
  g = padZero(g.toString(16));
  b = padZero(b.toString(16));

  return `#${r}${g}${b}`;
}

// ChatGPT: The function takes a string str as an argument, and checks its length. If the length is 1, it returns a string "0" concatenated with hexStr. If the length is greater than 1, the original string hexStr is returned unchanged.
function padZero(hexStr) {
  return hexStr.length === 1 ? `0${hexStr}` : hexStr;
}
