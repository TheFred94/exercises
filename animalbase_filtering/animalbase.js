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

//   When clicked it looks at the data-action and then at the data-sort and then sorts by that
//   When clicked we run the selectFilter function
function registerButtons() {
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));

  document.querySelectorAll("[data-action='sort']").forEach((button) => button.addEventListener("click", selectSort));
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
function selectSort(event) {
  //   This line of code is using the dataset property of the event.target object to get the value of a data-sort attribute on the HTML element that triggered an event.
  const sortBy = event.target.dataset.sort;
  console.log(`user selected ${sortBy}`);
  //  Runs the filterList function with the filter variable as it's parameter
  sortList(sortBy);
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

  // Runs the displayList function with the filteredList variable as it's parameter.
  // filtered list is a variable that contains the allAnimals list
  displayList(filteredList);
}

function isCat(animal) {
  // We write this instead of using an if statement
  return animal.type === "cat";
}
function isDog(animal) {
  // We write this instead of using an if statement
  return animal.type === "dog";
}

// A more generic sorting function using closure. The sortByPropery is enclosed inside the sortList function.
// The sortBy parameter can then be used by the sortByProperty function. We put the sortBy in [ ] instead of using another property from the array like name, age, type etc.
function sortList(sortBy) {
  let sortedList = allAnimals;

  sortedList = sortedList.sort(sortByProperty);
  function sortByProperty(animalA, animalB) {
    // console.log(`sortBy is ${sortBy}`);
    if (animalA[sortBy] > animalB[sortBy]) {
      return 1;
    } else {
      return -1;
    }
  }
  displayList(sortedList);
}

function sortByType(animalA, animalB) {
  if (animalA.type > animalB.type) {
    return 1;
  } else {
    return -1;
  }
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
