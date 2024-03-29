const content = document.querySelector('.content');
const changeGridSizeButton = document.querySelector('.changeGridSize');
const normalModeButton = document.querySelector('.normalMode');
const rainbowModeButton = document.querySelector('.rainbowMode');
const clearButton = document.querySelector('.clear');
const eraserButton = document.querySelector('.eraser');



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

function rainbowMode() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    grid.removeEventListener('mouseover', changeBgColor);
  })
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', changeBgColorRGB);
  })
}

function normalMode() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    grid.removeEventListener('mouseover', changeBgColorRGB);
  })
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', changeBgColor);
  })
}

function eraserMode() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    grid.removeEventListener('mouseover', changeBgColorRGB);
  })
  grids.forEach((grid) => {
    grid.removeEventListener('mouseover', changeBgColor);
  })
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = `white`;
    })
  })
}

function clearMode() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((grid) => {
    grid.style.backgroundColor = `white`;
  })
}

function changeBgColor() {
  this.style.backgroundColor = `black`;
}

function changeBgColorRGB() {
  this.style.backgroundColor = `${getRandomColor()}`;
}

function getRandomColor() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + R + "," + G + "," + B + ")";  
  return randomColor;
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

changeGridSizeButton.addEventListener('mouseover', addHover);
changeGridSizeButton.addEventListener('mouseout', removeHover);
rainbowModeButton.addEventListener('click', rainbowMode);
rainbowModeButton.addEventListener('mouseover', addHover);
rainbowModeButton.addEventListener('mouseout', removeHover);
normalModeButton.addEventListener('click', normalMode);
normalModeButton.addEventListener('mouseover', addHover);
normalModeButton.addEventListener('mouseout', removeHover);
eraserButton.addEventListener('mouseover', addHover);
eraserButton.addEventListener('mouseout', removeHover);
eraserButton.addEventListener('click', eraserMode);
clearButton.addEventListener('mouseover', addHover);
clearButton.addEventListener('mouseout', removeHover);
clearButton.addEventListener('click', clearMode);


function addHover() {
  this.classList.add('hover');
}

function removeHover() {
  this.classList.remove('hover');
}


