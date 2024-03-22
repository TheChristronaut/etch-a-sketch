const changeGridSize = document.querySelector("#grid-size-btn");
const resetbtn = document.querySelector("#reset-btn");
const container = document.querySelector("#container");

let currentGridSize = 24;

function generateGrid(gridSize) {
    clearGrid();
    currentGridSize = gridSize;
    for (let i = 0; i < gridSize; i++) {
        const line = document.createElement("div");
        line.setAttribute("id", "line" + i);
        line.classList.add("line")
        container.appendChild(line);
        function generateLine() {
            for (let j = 0; j < gridSize; j++){
                const line = document.querySelector("#line" + i);
                const box = document.createElement("div");
                box.classList.add("one-square");
                box.style.cssText = "background: whitesmoke;";
                box.addEventListener("mouseover", () => {
                    box.style.cssText = "background: black;";
                })
                line.appendChild(box);
                console.log("This function works");
            }
        }
        generateLine();
        console.log("This function works too");
    }
}
generateGrid(24);

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

changeGridSize.addEventListener("click", () => {
    const playerGridSize = prompt("How many squares across would you like?");
    if (playerGridSize > 100) {
        alert("Grid size max is 100!");
    } else {
    generateGrid (playerGridSize);
    }
});

resetbtn.addEventListener("click", () => {
    generateGrid (currentGridSize);
})