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
}
