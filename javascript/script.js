const container = document.querySelector('.container');
const changeGridButton = document.querySelector('.change-grid-button');
const rgbButton = document.querySelector('.rgb-button');
const darkeningButton = document.querySelector('.darkening-button');

for (let i = 1; i <= 16; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('gridRow');
  for (let i = 1; i <= 16; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('gridColumn');
    gridRow.appendChild(gridColumn);
    gridColumn.addEventListener('mouseover', black);
  }
  container.appendChild(gridRow);
}

function changeGridSize () {
  let size;
  do {
    size = +prompt('Enter your desired grid size: (Minimum of 16, maximum of 100)');
  } while (size < 16 || size > 100);
  while(container.hasChildNodes()) {
    container.removeChild(container.firstChild)
  }

  for (let i = 1; i <= size; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    for (let i = 1; i <= size; i++) {
      const gridColumn = document.createElement('div');
      gridColumn.classList.add('gridColumn');
      gridRow.appendChild(gridColumn);
      gridColumn.addEventListener('mouseover', black);
    }
    container.appendChild(gridRow);
  }

}

function black () {
  this.classList.add('black');
}

function rgb () {
  function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }

  this.style.background = randomColor();
}

function setRgb () {
  const allGridColumn = document.querySelectorAll('.gridColumn');
  allGridColumn.forEach((column) => {
    column.removeEventListener('mouseover', black);
    column.addEventListener('mouseover', rgb)
  })
}



changeGridButton.addEventListener('click', changeGridSize);