const content = document.querySelector('.content');
const changeGridSizeButton = document.querySelector('.changeGridSize');


function makeRows(rows, cols) {
  content.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  content.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    content.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', changeBgColor);
  };
};
makeRows(16,16);

function changeBgColor() {
  this.style.backgroundColor = `red`;
}

function deleteRows() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    content.removeChild(grid);
  })
}



