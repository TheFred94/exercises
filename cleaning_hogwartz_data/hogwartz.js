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

function loadPage() {
  console.log("Page loaded");
  loadJSON();
}

async function getData(studentDataUrl) {
  const result = await fetch(studentDataUrl);
  students = await result.json();
  showListOfStudents();
}

function loadJSON() {
  fetch(studentDataUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareObjects(jsonData);
    });
}

function showListOfStudents() {
  console.log(students);
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    const studentCard = Object.create(Student);
    // const fullName = jsonObject.fullname.split(" ");

    studentCard.firstname = jsonObject.fullname;

    allStudents.push(studentCard);
  });
  displayList();
}

function displayList() {
  document.querySelector("#list tbody").innterHTML = "";

  allStudents.forEach(displayStudent);
}

function displayStudent(studentCard) {
  const clone = document.querySelector("template#student").content.cloneNode(true);

  clone.querySelector("[data-field=firstname]").textContent = studentCard.firstname;

  document.querySelector("#list tbody").appendChild(clone);
}
