"use strict";

const studentDataUrl = "https://petlatkea.dk/2021/hogwarts/students.json";
let allStudents = [];
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
  getData(studentDataUrl);
}

async function getData(studentDataUrl) {
  const result = await fetch(studentDataUrl);
  students = await result.json();
  showListOfStudents();
}

function showListOfStudents() {
  console.log(students);
}
