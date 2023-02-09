"use strict";

const artwork1 = document.getElementById("artwork1");

addArt();

function addArt() {
  for (let box = 0; box < 20; box++) {
    let box = document.createElement("div");
    box.innerHTML = "";
    box.classList.add("box");
    artwork1.appendChild(box);
    console.log("box added");
  }
}
