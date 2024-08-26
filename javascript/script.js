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



changeGridButton.addEventListener('click', changeGridSize);