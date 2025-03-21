// get container from html
const gridContainer = document.querySelector("#grid-container");

// create erase button
const eraseButton = document.createElement("button");
eraseButton.textContent = "Erase Grid";
eraseButton.addEventListener("click", () => confirm());

// append the erase button to info div
const infoDiv = document.querySelector("#info");
infoDiv.appendChild(eraseButton);

// create span for confirm buttons
const confirmSpan = document.createElement("span");
confirmSpan.textContent = "Are you shure?";

// create confirm buttons
const confirmButtonYes = document.createElement("button");
const confirmButtonNo = document.createElement("button");
confirmButtonYes.textContent = "Yes";
confirmButtonNo.textContent = "No";
confirmButtonYes.addEventListener("click", () => eraseGrid());
confirmButtonNo.addEventListener("click", () => removeConfirm());

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
};

function changeColor(element) {
  let actualOpacity = parseFloat(element.style.opacity) || 0.1;
  let newOpacity = actualOpacity < 1 ? actualOpacity + 0.1 : actualOpacity;

  element.style.opacity = newOpacity;
  element.style.backgroundColor = `rgba(90, 90, 90, ${newOpacity})`;
};

function confirm() {
  eraseButton.remove();
  infoDiv.appendChild(confirmSpan);
  infoDiv.appendChild(confirmButtonYes);
  infoDiv.appendChild(confirmButtonNo);
};

function removeConfirm() {
  confirmSpan.remove();
  confirmButtonYes.remove();
  confirmButtonNo.remove();
  infoDiv.appendChild(eraseButton);
}

function eraseGrid() {
  const grid = gridContainer.querySelectorAll("div");
  grid.forEach(block => {
    block.style.opacity = 0;
  });
  removeConfirm();
};