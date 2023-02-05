"use strict";

let result;
let resultRounded;
let roundedDecimals;

// Const for the result list
const resultList = document.querySelector("#results");

// Looks for click on the calculate button and runs the read numbers funtion
const calculate = document.querySelector("#calculate").addEventListener("click", doMath);

document.querySelector("#clear").addEventListener("click", clearResults);

// Does all the calculating including rounding numbers and listen for checked or unchecked in the round to checkbox
function doMath() {
  let firstNumber = Number(document.querySelector("#firstnumber").value);
  let secondNumber = Number(document.querySelector("#secondnumber").value);
  let doRoundChecked = document.querySelector("#doround").checked;
  //   result = firstNumber + secondNumber;
  let operator = document.querySelector("#operator").value;
  console.log("First Number:", firstNumber);
  console.log("Second Number:", secondNumber);
  let roundedDecimals = Number(document.querySelector("#decimals").value);
  if (doRoundChecked === false) {
    console.log(doRoundChecked);
    if (operator === "add") {
      console.log("=", firstNumber + secondNumber);
      result = firstNumber + secondNumber;
    } else if (operator === "sub") {
      console.log("=", firstNumber - secondNumber);
      result = firstNumber - secondNumber;
    } else if (operator === "mul") {
      console.log("=", firstNumber * secondNumber);
      result = firstNumber * secondNumber;
    } else {
      console.log("=", firstNumber / secondNumber);
      result = firstNumber / secondNumber;
    }
  }
  //   Else statement that runs when the checkbox is checked and true
  //   Result rounded is defined as the roundedResult and is used to define the result as the roundedResult and round to a fixed value
  else {
    console.log("Rounded Decimal", roundedDecimals);
    if (operator === "add") {
      console.log("=", firstNumber + secondNumber);
      resultRounded = firstNumber + secondNumber;
      result = resultRounded.toFixed(roundedDecimals);
    } else if (operator === "sub") {
      console.log("=", firstNumber - secondNumber);
      resultRounded = firstNumber - secondNumber;
      result = resultRounded.toFixed(roundedDecimals);
    } else if (operator === "mul") {
      console.log("=", firstNumber * secondNumber);
      resultRounded = firstNumber * secondNumber;
      result = resultRounded.toFixed(roundedDecimals);
    } else {
      console.log("=", firstNumber / secondNumber);
      resultRounded = firstNumber / secondNumber;
      result = resultRounded.toFixed(roundedDecimals);
    }
  }

  //   Tells what the result is and places it in the firstnumber input field
  document.querySelector("#firstnumber").value = result;

  //   Creates an li elemnt to place the result and creates a long list which is scrollable
  //   This appends the result to the end of the list
  let createLi = document.createElement("li");
  let addResultToList = document.createTextNode(result);
  createLi.appendChild(addResultToList);
  resultList.appendChild(createLi);

  resultList.scrollTo(0, 1000000);
}

// Clears the result list and appends the latest result in the list
function clearResults() {
  resultList.innerHTML = "";

  //   Creates an li elemnt to place the result and creates a long list which is scrollable
  //   This appends the result to the end of the list
  let createLi = document.createElement("li");
  let addResultToList = document.createTextNode(result);
  createLi.appendChild(addResultToList);
  resultList.appendChild(createLi);

  //   Tells what the result is and places it in the firstnumber input field
  document.querySelector("#firstnumber").value = result;
  console.log("Results cleared");
}
