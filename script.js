// Create Button to change grid
let button = document.createElement("BUTTON");
let btn_txt = document.createTextNode("Change Grid");
button.appendChild(btn_txt);
document.body.appendChild(button);
// Moves the button to the top
document.body.insertBefore(button, document.body.firstChild);


let container = document.querySelector(".container");
let numSquares = 16;

// Create grid
createGrid(numSquares);

function createGrid(numTiles) {
    // Creates the variable --numTiles and sets it to numTiles so the css square class inherits the property of the
    container.style.setProperty('--numTiles', numTiles); 
    
    // Clear the container before creating new squares
    container.innerHTML = '';

    // Create the grid
    for (let i = 0; i < numTiles * numTiles; i++) {
        let square = document.createElement("div");
        square.classList.add("square");

        // Hover effect
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "orange";
        });

        container.appendChild(square);
    }
}

// Event listener to change grid size
button.addEventListener('click', () => {
    let newSquares = parseInt(prompt('How many squares do you want on each side?'));
    if (newSquares > 100) {
        alert('Enter a number below 100');
    } else if (newSquares > 0) {
        createGrid(newSquares);
    }
});
