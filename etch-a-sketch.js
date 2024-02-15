const gridContainer = document.querySelector(".grid-container");

function createPixels(size) {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = `calc(100% / ${size})`;
      pixel.style.height = `calc(100% / ${size})`;
      pixel.addEventListener("mouseover", mouseoverEventHandler);

      gridContainer.appendChild(pixel);
    }
  }
}

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}
const mouseoverEventHandler = (e) => {
  e.target.style.backgroundColor = generateColor();
};

function removePixels() {
  const pixels = gridContainer.querySelectorAll(".pixel");
  pixels.forEach((pixel) => gridContainer.removeChild(pixel));
}

document.querySelector("#reset-button").addEventListener("click", () => {
  let newGridSize = parseInt(
    prompt(
      "Enter a new size for the Etch-a-Sketch screen (must be less than 100):"
    )
  );

  if (!isNaN(newGridSize) && newGridSize <= 100) {
    removePixels();
    createPixels(newGridSize);
  } else {
    alert("Input is not valid.");
  }
});

createPixels(16);
