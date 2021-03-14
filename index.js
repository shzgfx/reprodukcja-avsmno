import "./style.css";

const PIXEL_COLOR = "#e44d4d";

const fakeCanvas = document.querySelector(".fake-canvas");
const fakePixels = [...fakeCanvas.querySelectorAll(".pixel")]
const originalCanvas = document.querySelector(".original-canvas");
const originalPixels = [...originalCanvas.querySelectorAll(".pixel")];
const redSquaresIndex = [];



originalPixels.forEach((square, index) => {
  if (square.className.includes("pixel-dot")) {
    redSquaresIndex.push(index);
  }
});

fakePixels.forEach((square, index) => {
  if (redSquaresIndex.includes(index)) {
    square.classList.add("pixel-dot");
  }
});
