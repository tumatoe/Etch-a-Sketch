let gridBox;
let gridRow;
const gridContainer = document.querySelector('.grid-Container');
const buttonContainer = document.querySelector('.button-Container');

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

gridContainer.addEventListener('mouseover', function(event) {
    if (event.target.classList.contains('gridCell')) {
        event.target.style.backgroundColor = 'black'
    }
})

function addGridBtn() {
    const newGridBtn = document.createElement('button');
    newGridBtn.textContent = 'New Grid';
    buttonContainer.appendChild(newGridBtn);
    
    newGridBtn.addEventListener('click', function() {
        prompt('What size grid would you like?')
    })
}
addGridBtn()


let dsasdasdas;