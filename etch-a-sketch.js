const gridContainer = document.querySelector(".grid-container");

function createPixels(size) {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      //TODO: figure out how to remove these magic numbers so that the width and height can be resized in the css without touching the script.
      pixel.style.width = 720 / size + "px";
      pixel.style.height = 480 / size + "px";
      pixel.addEventListener("mouseover", mouseoverEventHandler);

      gridContainer.appendChild(pixel);
    }
  }
}

const mouseoverEventHandler = (e) => {
  e.target.style.backgroundColor = "#000";
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
