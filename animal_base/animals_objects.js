"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

// This is the object prototype for the animals look at the CAPITAL A for the object template
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    const animal = Object.create(Animal);
    // Looks at the fullname in the json file and splits the name
    const fullName = jsonObject.fullname.split(" ");
    // Takes the age from the json file and inserts it into the Object
    animal.age = jsonObject.age;
    // Takes the first part from the "fullname" the name and puts it into a string
    animal.name = fullName[0];
    // Takes the second part from the "fullname" the name and puts it into a string
    animal.desc = fullName[2];
    // Takes the third part from the "fullname" the name and puts it into a string
    animal.type = fullName[3];
    allAnimals.push(animal);
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
