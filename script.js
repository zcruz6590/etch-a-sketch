let container = document.querySelector(".container")
const rows = 16, cols = 16;

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        //square 
        let square = document.createElement("div");
        square.classList.add("square") //creates square class to div element
        square.style.backgroundColor = "cyan"
        square.style.border = "1px solid black"
        square.style.minwidth = "25px"
        square.style.minheight = "25px"
        container.appendChild(square)
    }
}
