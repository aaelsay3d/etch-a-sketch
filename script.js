let gridSize = 16;

function createGrid(gridSize) {
    let container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.style.width = `${600 / gridSize - 2}px`;
            squareDiv.style.height = `${600 / gridSize - 2}px`;
            squareDiv.style.border = "1px dotted grey";
            container.appendChild(squareDiv);
        }
    }
}

function changeSquareColor() {
    let container = document.querySelector(".container");
    container.addEventListener("mouseover", (e) => {
        let target = e.target;
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        target.style.backgroundColor = "#" + randomColor;
    });
}

function handleClickingNewGridButton() {
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
        let newGridSize = prompt("Enter a new grid size.");
        if (newGridSize === null) {
            return
        }

        newGridSize = parseInt(newGridSize);

        if (newGridSize <= 100 && newGridSize >= 1) {
            clearGrid();
            gridSize = newGridSize;
            createGrid(newGridSize);
        }
        else {
            alert("Please, enter a number in the range 1 to 100 inclusive.");
        }
    });
}


function clearGrid() {
    let container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            container.removeChild(container.firstElementChild);
        }
    }
}

function draw() {
    createGrid(gridSize);
    changeSquareColor();
    handleClickingNewGridButton();
}


draw();
