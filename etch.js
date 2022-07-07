
const container = document.querySelector('.container');
const btn = document.querySelector('#sqnum');

function makeGrid(squareNum) {
    if (squareNum <= 100) {
        for (let i = 0; i < (squareNum * squareNum); i++) {
            const square = document.createElement('div');
            square.style.width = `${100 / squareNum}%`; 
            square.classList.add('box');
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'white';
            });
            container.appendChild(square);
        };
    }
    else {
        alert("Please choose 100 or below.");
    }
};

btn.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const newGrid = Number(prompt("Enter the number of squares per side.")); 
    if (isNaN(newGrid) == true || newGrid <=0) {
        alert("Error! Please enter a number greater than 0!"); 
    }
    makeGrid(newGrid);

});

makeGrid(16);