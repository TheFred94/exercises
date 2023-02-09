"use strict";

const artwork1 = document.getElementById("artwork1");

addArt();

function addArt() {
  for (let i = 100; i < 300; i += 20) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = `${i}px`;
    box.style.width = `${i}px`;
    artwork1.appendChild(box);
    console.log("box added");
  }
}
