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
  console.log(students);
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // Creates a const with the name student card that contains all the information from the Object
    const studentCard = Object.create(Student);
    // Splits the fullname string into parts ----------------------
    let fullName = jsonObject.fullname;
    // console.log(fullName);
    let nameResult = "";
    // Trims the fullName string
    let fullnameTrim = fullName.trim();
    // console.log(fullnameTrim);

    // First name - Which takes the substring from 0 at the index if (" ")
    nameResult = fullnameTrim.substring(0, fullnameTrim.indexOf(" "));
    if (fullnameTrim === "Leanne") {
      nameResult = fullName;
    }

    // House
    let houseString = jsonObject.house;
    let houseResult = "";
    let houseTrim = houseString.trim();
    console.log(houseTrim);

    houseResult = houseTrim.substring();
    console.log(houseResult);

    // This takes the first name and takes the first letter at 0, makes it uppercase + the nameResult and slices it a index 1 and makes it uppercase.
    studentCard.firstname = nameResult.charAt(0).toUpperCase() + nameResult.slice(1).toLowerCase();
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
  clone.querySelector("[data-field=house]").textContent = studentCard.house;

  document.querySelector("#list tbody").appendChild(clone);
}
