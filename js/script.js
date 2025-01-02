"use strict";

let dayMode = 1;
const mode = document.querySelector(".mode");
mode.innerHTML = "Night";

function changeMode() {
  const body = document.body;
  if (dayMode > 0) {
    dayMode -= 1;
    mode.innerText = "Day";
  } else {
    dayMode += 1;
    mode.innerText = "Night";
  }

  body.classList.toggle("bg--day");
  body.classList.toggle("bg--night");
}
