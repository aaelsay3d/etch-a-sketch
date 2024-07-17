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

createGrid(gridSize);
changeSquareColor();
