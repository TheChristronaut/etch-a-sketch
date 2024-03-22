const gridSize = prompt("Enter your grid size");

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        const container = document.querySelector("#container");
        const line = document.createElement("div");
        line.setAttribute("id", "line" + i);
        line.classList.add("line")
        container.appendChild(line);
        function generateLine() {
            for (let j = 0; j < gridSize; j++){
                const line = document.querySelector("#line" + i);
                const box = document.createElement("div");
                box.classList.add("one-square");
                box.style.cssText = "background: white;";
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
generateGrid();