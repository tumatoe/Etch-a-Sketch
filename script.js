let gridBox;
let gridRow;
const gridContainer = document.querySelector('.grid-Container');
const buttonContainer = document.querySelector('.button-Container');
let input;
let gridSize;

function createGrid() {

    for (let i = 0; i < 16; i++) {
        let gridRow = document.createElement('div');
        gridRow.className = 'gridRow';

        for ( let j = 0; j < 16; j++) {
            let gridCell = document.createElement('div');
            gridCell.className = 'gridCell'
            gridRow.appendChild(gridCell)
        }
        gridContainer.appendChild(gridRow)
    }

    
}
createGrid()

function addGridBtn() {
    const newGridBtn = document.createElement('button');
    newGridBtn.textContent = 'New Grid';
    buttonContainer.appendChild(newGridBtn);
    
    newGridBtn.addEventListener('click', function() {
        let input = (prompt('What size grid would you like?'))
        let gridSize = getUserGridSize(input);

        if (gridSize !== null) {
            gridContainer.innerHTML = '';
            createNewGrid(gridSize);
        }
    })
}
addGridBtn()

function getUserGridSize(input) {
    let gridSize = parseInt(input, 10);
    

    if ((!isNaN(gridSize)) && (gridSize <=100) && (gridSize >= 1)) {
        return gridSize;
    } else {
        alert('Please enter a number from 1-100')
        return null;
    }
}

gridContainer.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('gridCell')) {
        event.target.style.backgroundColor = 'black'
    }
})

function createNewGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement('div');
        gridRow.className = 'gridRow';

        for ( let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement('div');
            gridCell.className = 'gridCell'
            gridRow.appendChild(gridCell)
        }
        gridContainer.appendChild(gridRow)
    }
}
