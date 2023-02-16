const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasly",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

fireOrHire(hire, person4);

fireOrHire(fire, person3);

console.log(person3);
console.log(person4);

const studentDataUrl = "https://petlatkea.dk/2021/hogwarts/students.json";

init();

function init() {
  console.log("init");
  // Prepares the function loadJSON functions with the parameters
  loadJSON(studentDataUrl, prepareData);
}

// The loadJSON gets the studentDataUrl and defines a parameter called url which holds that value
async function loadJSON(url, callback) {
  // This const fetches the url (studentDataUrl) and stores it as "result"
  const result = await fetch(url);
  // Then it uses that result and stores it as a "data", which is used as a parameter for the callback function
  const data = await result.json();
  callback(data);
}

function prepareData(data) {
  console.log("prepare" + data);

  console.table(data);
}
