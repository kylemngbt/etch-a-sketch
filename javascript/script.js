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
      gridColumn.addEventListener('mouseover', () => {
        gridColumn.classList.add('black');
      })
    }
    container.appendChild(gridRow);
  }
  