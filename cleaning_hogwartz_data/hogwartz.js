"use strict";

const studentDataUrl = "https://petlatkea.dk/2021/hogwarts/students.json";
const allStudents = [];
let students;

const Student = {
  firstname: "",
  middlename: "",
  lastname: "",
  nickname: "",
  image: "",
  house: "",
};

document.addEventListener("DOMContentLoaded", loadPage);

// Loads the page
function loadPage() {
  console.log("Page loaded");
  loadJSON();
}

// Runs the async function that fetches the data from the Json------------------------------
// Not sure if this is needed at all?
async function getData(studentDataUrl) {
  const result = await fetch(studentDataUrl);
  students = await result.json();
  showListOfStudents();
}

// Loads the Json and prepares the data for the following functions---------------------------
function loadJSON() {
  fetch(studentDataUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareObjects(jsonData);
    });
  // Shows the array with all the students in the console
  console.log(allStudents);
}

// Shows the list of students---------------------------------------------
function showListOfStudents() {
  // * console.log(students);
  prepareObjects(jsonData);
}

// This is where all the magic happens ----------------------------------------
function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Creates a const with the name student card that contains all the information from the Object
    const studentCard = Object.create(Student);
    // Splits the fullname string into parts
    let fullName = jsonObject.fullname;
    //* console.log(fullName);
    let firstnameResult = "";

    // Trims the fullName string
    let fullnameTrim = fullName.trim();
    // * console.log(fullName);

    // Firstname - Which takes the substring from 0 at the index if (" ") --------------
    firstnameResult = fullnameTrim.substring(0, fullnameTrim.indexOf(" "));
    if (fullnameTrim === "Leanne") {
      firstnameResult = fullName;
    }
    // * console.log(fullnameTrim);

    // Middlename --------------------------------

    let middlename = "";
    let middlenameTrim = "";
    let middlenameResult = "";

    middlenameTrim = fullName.trim();

    middlenameResult = middlenameTrim.substring(middlenameTrim.indexOf(" "), middlenameTrim.lastIndexOf(" ")).trim();

    middlename = middlenameResult;

    // If the middlename contains `\"`then the middlename shouldn't display
    if (fullName.includes(`\"`) === true) {
      studentCard.middlename = "";
    } else {
      studentCard.middlename = middlename.charAt(0).toUpperCase() + middlename.slice(1).toLowerCase();
    }

    console.log(fullnameTrim);
    // Lastname --------------------------------------------
    let lastname = "";
    let lastnameTrim = "";

    lastnameTrim = fullName.trimEnd();
    lastname = lastnameTrim;

    let lastnameResult = lastname.substring(lastnameTrim.lastIndexOf(" ") + 1);

    if (lastnameResult.includes("-")) {
      let lastnameHyphen = lastname.split("-");
      // * console.log(lastnameHyphen);
      studentCard.lastname = lastnameResult;
    } else {
      studentCard.lastname = lastnameResult.charAt(0).toUpperCase() + lastnameResult.slice(1).toLowerCase();
    }

    // * console.log(lastname);

    // Nicknames
    let nicknameResult = fullName.substring(fullName.indexOf(`"`), fullName.lastIndexOf(`"`) + 1);

    // House ----------------------------------------------------
    let houseString = jsonObject.house;
    let houseResult = "";
    let houseTrim = houseString.trim();
    //* console.log(houseTrim);

    houseResult = houseTrim.substring();
    // * console.log(houseResult);

    // Concatenation of the studentCard data ------------------------------------------------------------

    // Firstname concatenation
    studentCard.firstname = firstnameResult.charAt(0).toUpperCase() + firstnameResult.slice(1).toLowerCase();
    // Nickname concatenation
    studentCard.nickname = nicknameResult;
    // Middlename concatenation

    // * console.log(studentCard.lastname);
    // This is the concatenation for the house data
    studentCard.house = houseResult.charAt(0).toUpperCase() + houseResult.slice(1).toLowerCase();
    // Pushes all the students from the array into a studentcard and displays the data
    allStudents.push(studentCard);
  });
  displayList();
}

// Displays the list of data from the json file-----------------------------------
function displayList() {
  // Grabs the id="list" and the tbody element from the HTML and empties the content
  document.querySelector("#list tbody").innterHTML = "";

  //  Runs the displayStudent functions for each of the data entries in the Json file
  allStudents.forEach(displayStudent);
}

// Creates the student card for each of the students
function displayStudent(studentCard) {
  // Clones the template for each of the students
  const clone = document.querySelector("template#student").content.cloneNode(true);

  // Grabs the firstname data field in the HTML and displays the textcontent from the studentCard firstname property
  clone.querySelector("[data-field=firstname]").textContent = studentCard.firstname;
  clone.querySelector("[data-field=nickname]").textContent = studentCard.nickname;
  clone.querySelector("[data-field=middlename]").textContent = studentCard.middlename;
  clone.querySelector("[data-field=lastname]").textContent = studentCard.lastname;
  clone.querySelector("[data-field=house]").textContent = studentCard.house;

  document.querySelector("#list tbody").appendChild(clone);
}
