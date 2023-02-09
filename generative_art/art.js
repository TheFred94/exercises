"use strict";

const artwork1 = document.getElementById("artwork1");
const artwork2 = document.getElementById("artwork2");
const artwork3 = document.getElementById("artwork3");
const artwork4 = document.getElementById("artwork4");
const artwork5 = document.getElementById("artwork5");
const artwork6 = document.getElementById("artwork6");

addArt();

function addArt() {
  // First artwork
  for (let i = 100; i < 300; i += 20) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${i}px`;
    box.style.width = `${i}px`;
    artwork1.appendChild(box);
    console.log("box added");
  }
  //  Second artwork
  for (let i = 0; i < 90; i += 10) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.rotate = `${i}deg`;
    artwork2.appendChild(box);

    console.log("box added");
  }
  //  Third artwork
  for (let i = 0; i < 200; i += 10) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;

    artwork3.appendChild(circle);
    console.log("circle added");
  }
  //   Fourth artwork
  for (let i = -90; i < 90; i += 20) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = `translate(${i}px, ${i}px)`;
    box.classList.add("box");
    artwork4.appendChild(box);
    console.log("box added");
  }
  //   Fifth artwork
  for (let i = 1; i < 512; i *= 2) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.height = `${i}px`;
    circle.style.width = `${i}px`;
    circle.classList.add("circle");
    artwork5.appendChild(circle);
    console.log("circle added");
  }
  //   Sixth artwork
  for (let i = -20; i < 45; i += 5) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.transform = `translateX(${i - 50}px) rotate(${i * 4}deg)`;
    artwork6.appendChild(circle);
    console.log("circle added");
  }
}
