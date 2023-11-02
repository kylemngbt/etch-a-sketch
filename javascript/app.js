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
  this.style.backgroundColor = `black`;
}

function deleteGrids() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    content.removeChild(grid);
  })
}

changeGridSizeButton.addEventListener('click', () => {
  deleteGrids();
  let gridSize = +prompt('Set grid size: (Maximum of 100)');
  while(true) {
    if (gridSize > 100) {
      gridSize = +prompt(`Too high of a number, try again.
      Set grid size: (Maximum of 100)`);
    } else if (gridSize <= 0) {
      gridSize = +prompt(`Number should be greater than 0, try again.
      Set grid size: (Maximum of 100)`);
    } else if (isNaN(gridSize)) {
      gridSize = +prompt(`Input a number, try again.
      Set grid size: (Maximum of 100)`);
    }
    else {
      break;
    }
  }
  makeRows(gridSize,gridSize);
});



