"use strict";

const artwork1 = document.getElementById("artwork1");
const box = document.createElement("div");

addArt();

function addArt() {
  box.innerHTML = "";
  box.classList.add("box");
  artwork1.appendChild(box);
  console.log("box added");
}
