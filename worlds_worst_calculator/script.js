"use strict";

// Looks for click on the calculate button and runs the read numbers funtion
const calculate = document.querySelector("#calculate").addEventListener("click", doMath);

// Reads the numbers from the first, second and operator field
function doMath() {
  let firstNumber = Number(document.querySelector("#firstnumber").value);
  let secondNumber = Number(document.querySelector("#secondnumber").value);
  let operator = document.querySelector("#operator").value;
  console.log(firstNumber);
  console.log(secondNumber);
  if (operator === "add") {
    console.log(firstNumber + secondNumber);
  } else if (operator === "sub") {
    console.log(firstNumber - secondNumber);
  } else if (operator === "mul") {
    console.log(firstNumber * secondNumber);
  } else {
    console.log(firstNumber / secondNumber);
  }
}
