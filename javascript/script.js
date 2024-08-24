const container = document.querySelector('.container');

  for (let i = 1; i <= 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('gridRow');
    for (let i = 1; i <= 16; i++) {
      const gridColumn = document.createElement('div');
      gridColumn.classList.add('gridColumn');
      gridRow.appendChild(gridColumn);
    }
    container.appendChild(gridRow);
  }
  