"use strict";

isLeapYear(1800);

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("It's a leap year!");
        return true;
      } else {
        console.log("It's NOT a leap year!");
        return false;
      }
    } else {
      console.log("It's a leap year!");
      return true;
    }
  } else {
    console.log("It's NOT a leap year!");
    return false;
  }
}
