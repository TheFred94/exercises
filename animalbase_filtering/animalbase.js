"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  registerButtons();

  loadJSON();
}

function registerButtons() {
  // Uses the data-action from the buttons tags in the html
  //   When clicked we run the selectFilter function
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // displays the list with the allAnimals as it's parameter
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  // We create a variable with animal
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

// This function is run when the user clicks a button
// event is set as its parameter and is used in the filter variable inside the function
function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`user selected ${filter}`);
  //  Runs the filterList function with the filter variable as it's parameter
  filterList(filter);
}

// The filterBy is used as an argument and it's value is taken from the filter parameter from the selectFilter function
function filterList(filterBy) {
  // Create a filtered list of only cats
  let filteredList = allAnimals;

  if (filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }
  // Runs the displayList function with the filteredList variable as it's parameter
  displayList(filteredList);
}

function isCat(animal) {
  // We write this instead of usin an if statement
  return animal.type === "cat";
}
function isDog(animal) {
  // We write this instead of usin an if statement
  return animal.type === "dog";
}

// Clears the html tbody every time the button is clicked
// The animals parameter is used as an argument for this function and it's value is equal to filteredList
function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

// Displays the animals in the html table and creates clones for all the objects in the array
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
