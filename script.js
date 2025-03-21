// get container from html
const gridContainer = document.querySelector("#grid-container");

// greate the grid (16x16 grid, 256 blocks) and append to container
for (let i = 0; i < 256; i++) {
  // create a div
  const div = document.createElement("div");
  // styling the div
  div.setAttribute(
    "style",
    "border: 1px solid black; width: 58px; height: 58px"
  );
  gridContainer.appendChild(div);
}

