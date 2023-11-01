const content = document.querySelector('.content');


function makeRows(rows, cols) {
  content.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  content.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    content.appendChild(cell).className = "grid-item";
  };
};
makeRows(16,16);

const grids = document.querySelectorAll('.grid-item');



