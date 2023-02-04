"use strict";

let resultRounded;
let result;
let roundedDecimals;
const resultList = document.querySelector("#results");
// Looks for click on the calculate button and runs the read numbers funtion
const calculate = document.querySelector("#calculate").addEventListener("click", doMath);

// Reads the numbers from the first, second and operator field
function doMath() {
  let firstNumber = Number(document.querySelector("#firstnumber").value);
  let secondNumber = Number(document.querySelector("#secondnumber").value);
  let doRoundChecked = document.querySelector("#doround").checked;
  result = firstNumber + secondNumber;
  let operator = document.querySelector("#operator").value;
  console.log("First Number:", firstNumber);
  console.log("Second Number:", secondNumber);
  let roundedDecimals = Number(document.querySelector("#decimals").value);
  //   const for to target the checkbox
  if (doRoundChecked === false) {
    console.log(doRoundChecked);
    if (operator === "add") {
      console.log(firstNumber + secondNumber);
      result = firstNumber + secondNumber;
      console.log(firstNumber - secondNumber);
      result = firstNumber - secondNumber;
    } else if (operator === "mul") {
      result = firstNumber * secondNumber;
    } else {
      console.log(firstNumber / secondNumber);
    }
  } else {
    console.log("Rounded Decimal", roundedDecimals);
    if (operator === "add") {
      console.log(firstNumber + secondNumber);
      resultRounded = firstNumber + secondNumber;
      result = result.toFixed(roundedDecimals);
    } else if (operator === "sub") {
      console.log(firstNumber - secondNumber);
      resultRounded = firstNumber - secondNumber;
      result = result.toFixed(roundedDecimals);
    } else if (operator === "mul") {
      console.log(firstNumber * secondNumber);
      resultRounded = firstNumber * secondNumber;
      result = result.toFixed(roundedDecimals);
    } else {
      console.log(firstNumber / secondNumber);
      resultRounded = firstNumber / secondNumber;
      result = result.toFixed(roundedDecimals);
    }
  }

  document.querySelector("#firstnumber").value = result;
  console.log("=", result);

  let createLi = document.createElement("li");
  let addResultToList = document.createTextNode(result);
  createLi.appendChild(addResultToList);
  resultList.appendChild(createLi);

  resultList.scrollTo(0, 1000000);
}
