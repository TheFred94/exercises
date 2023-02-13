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
  // This creates a string from the convertToRGB function and creates a "padZero" function which is run further down the script
  r = padZero(r.toString(16));
  g = padZero(g.toString(16));
  b = padZero(b.toString(16));

  //! The return statement in this function function is used to return the final hexadecimal string representation of the RGB color
  //* The function takes three arguments r, g, and b, which represent the red, green, and blue components of an RGB color.
  //? First, each component is converted to a hexadecimal string representation using the toString method and passing 16 as an argument. The resulting string is then passed to the padZero function to ensure that it has at least two characters.
  //TODO Finally, the three hexadecimal strings are concatenated with the # symbol to form the final hexadecimal string representation of the RGB color. This string is returned by the function using the return statement.
  return `#${r}${g}${b}`;
}

// ChatGPT: The function takes a string str as an argument, and checks its length. If the length is 1, it returns a string "0" concatenated with hexStr. If the length is greater than 1, the original string hexStr is returned unchanged.
function padZero(hexStr) {
  return hexStr.length === 1 ? `0${hexStr}` : hexStr;
}
