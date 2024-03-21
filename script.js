function generateGrid() {
    for (let i = 0; i < 16; i++) {
        const container = document.querySelector("#container");
        const line = document.createElement("div");

        line.setAttribute("id", "line" + i);
        line.classList.add("line")

        container.appendChild(line);

        function generateLine() {
            for (let j = 0; j < 16; j++){
                const line = document.querySelector("#line" + i);
                const box = document.createElement("div");

                box.classList.add("one-square");
                box.style.cssText = "background: white;";

                line.appendChild(box);
                console.log("This function works");
            }
        }
        generateLine();
        console.log("This function works too");
    }
}
generateGrid();