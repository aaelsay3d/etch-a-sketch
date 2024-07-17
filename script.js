let gridSize = 20;

function createGrid(gridSize){
    let container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            let squareDiv = document.createElement("div");
            squareDiv.style.width = `${600 / gridSize - 2}px`;
            squareDiv.style.height = `${600 / gridSize - 2}px`;
            squareDiv.style.border = "1px dotted grey";
            container.appendChild(squareDiv);
        }
    }
}

createGrid(gridSize);
