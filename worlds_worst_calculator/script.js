"use strict";

let result;
const resultList = document.querySelector("#results");
// Looks for click on the calculate button and runs the read numbers funtion
const calculate = document.querySelector("#calculate").addEventListener("click", doMath);

// Reads the numbers from the first, second and operator field
function doMath() {
  let firstNumber = Number(document.querySelector("#firstnumber").value);
  let secondNumber = Number(document.querySelector("#secondnumber").value);
  result = firstNumber + secondNumber;
  let operator = document.querySelector("#operator").value;
  let roundedDecimals = Number(document.querySelector("#decimals").value);
  console.log("Rounded number", roundedDecimals);
  console.log("First Number:", firstNumber);
  console.log("Second Number:", secondNumber);
  const rounded = document.querySelector("#doround");
  console.log(rounded.checked);
  if (operator === "add") {
    if (rounded.checked === true) {
      Math.rounded;
    }
    console.log(firstNumber + secondNumber);
    result = firstNumber + secondNumber;
  } else if (operator === "sub") {
    console.log(firstNumber - secondNumber);
    result = firstNumber - secondNumber;
  } else if (operator === "mul") {
    console.log(firstNumber * secondNumber);
    result = firstNumber * secondNumber;
  } else {
    console.log(firstNumber / secondNumber);
    result = firstNumber / secondNumber;
  }
  document.querySelector("#firstnumber").value = result;
  console.log("=", result);

  let createLi = document.createElement("li");
  let addResultToList = document.createTextNode(result);
  createLi.appendChild(addResultToList);
  resultList.appendChild(createLi);

  resultList.scrollTo(0, 1000000);
}
