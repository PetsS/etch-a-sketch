// get container from html
const gridContainer = document.querySelector("#grid-container");

// greate the grid (16x16 grid, 256 blocks) and append to container
for (let i = 0; i < 256; i++) {
  // create a div
  const div = document.createElement("div");
  // styling the div
  div.setAttribute("style", "width: 60px; height: 60px");
  gridContainer.appendChild(div);

  div.addEventListener("mouseover", () => changeColor(div));
  div.addEventListener("click", () => changeColor(div));
  // right click prevent pop up context menu and set opacity to 0 on the div
  div.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    div.style.opacity = 0;
  });
}

function changeColor(element) {
  let actualOpacity = parseFloat(element.style.opacity) || 0.1;
  let newOpacity = actualOpacity < 1 ? actualOpacity + 0.1 : actualOpacity;

  element.style.opacity = newOpacity;
  element.style.backgroundColor = `rgba(90, 90, 90, ${newOpacity})`;
}
