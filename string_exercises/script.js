// Name parts exercise
const name = "Albus Percival Wulfric Brian Dumbledore";
let firstName = "";
let middleName = "";
let lastName = "";

firstName = name.substring(0, name.indexOf(" "));
middleName = name.substring(name.indexOf(" "), name.lastIndexOf(" "));
lastName = name.substring(name.lastIndexOf(" "));

console.log(firstName, middleName, lastName);

// 3caPitalization exercise
const name2 = "frederik";
// takes the first two letters of the word
const firstTwo = name2.substring(0, 2);
// takes the 3rd letter of the word
const thirdLet = name2.substring(2, 3);
// Capitalized the 3rd letter of the word
const capThirdLet = thirdLet.toUpperCase();
// takes the rest of the word
const restWord = name2.substring(3);

console.log(firstTwo + capThirdLet + restWord);

// Real capitalization
const name3 = "peter";
const firstLet = name3.substring(0, 1);
const restName = name3.substring(1);
const capFirstLet = firstLet.toUpperCase();

console.log(capFirstLet + restName);
