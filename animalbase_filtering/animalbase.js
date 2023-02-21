"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
};

// A global object with all the "settings" for the sort and filter functions
const settings = {
  filter: "all",
  sortBy: "name",
  sortDir: "asc",
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

  // fixed so we sort and filter on the first load
  buildList();
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
  //  Runs the setFilter function with the global setting filter as a parameter
  setFilter(filter);
}

// the global filter is parsed into this function and runs the buildList function
// When user clicks filter the list with that dataset will be build through the buildList function
function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

function selectSort(event) {
  //   This line of code is using the dataset property of the event.target object to get the value of a data-sort attribute on the HTML element that triggered an event.
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;
  console.log(`user selected ${sortBy} - ${sortDir}`);

  // Find "old" sortBy element, and remove .sortBy class
  const oldElement = document.querySelector(`[data-sort='${settings.sortBy}']`);
  oldElement.classList.remove("sortby");

  // Indicate active sort
  event.target.classList.add("sortby");

  // Toggles the direction from asc to desc or vice versa!
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  console.log(`user selected ${sortBy}`);
  //  Runs the filterList function with the filter variable as it's parameter
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

// FilterList takes the parameter filteredList
function filterList(filteredList) {
  // Create a filtered list of only cats
  // let filteredList = allAnimals;

  if (settings.filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
  }

  // Runs the displayList function with the filteredList variable as it's parameter.
  // filtered list is a variable that contains the allAnimals list
  return filteredList;
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
function sortList(sortedList) {
  let direction = 1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }
  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    // console.log(`sortBy is ${sortBy}`);
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return sortedList;
}

// Builds the list with the current list and with the sorted list
// The default is "all" on load
// When clicked the filterList and sortList is equal to the data(button) clicked
function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  displayList(sortedList);
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
  clone.querySelector("[data-field=star]").textContent = animal.star;
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }
  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
