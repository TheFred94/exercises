"use strict";

let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;
let operator = document.querySelector("#operator").value;

// Looks for click on the calculate button and runs the read numbers funtion
const calculate = document.querySelector("#calculate").addEventListener("click", readNumbers);

// Reads the numbers from the first, second and operator field
function readNumbers() {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operator);
}
