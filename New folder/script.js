// COLOR PICKER
const colorPicker = document.querySelector('#color-picker');

// BUTTONS
const randomColor = document.querySelector('#random-color'); // Generate random color
const normalBtn = document.querySelector('#normal-mode'); // Activate normal drawing mode
const hoverBtn = document.querySelector('#hover-mode'); // Activate hover drawing mode
const clearBtn = document.querySelector('#clear'); // Clear the grid

// GRID SIZE & DISPLAY
const gridRange = document.querySelector('#grid-range'); // Range input for selecting grid size
const gridDisplay = document.getElementsByClassName('grid-number'); // Display of current grid size

// GRID BOX
const gridBox = document.querySelector('#grid-box'); // Container for the grid

// CREATE GRID FUNCTION
const createGrid = (size) => {
    gridBox.innerHTML = ''; // Clear previous grid

    // Update grid display with current size
    const gridDisplayArray = [...gridDisplay];
    gridDisplayArray.forEach((display) => {
        display.textContent = size;
    });

    const totalGrid = size * size;

    for (let i = 0; i < totalGrid; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${500 / size}px`;
        grid.style.width = `${500 / size}px`;
        gridBox.appendChild(grid);

        // Hover mode function
        const hoverMode = () => {
            grid.removeEventListener('click', normalMode);

            // Event listener for hover effect
            grid.addEventListener('mouseenter', () => {
                if (hoverModeActive) {
                    grid.style.backgroundColor = colorPicker.value;
                }
            });

            hoverBtn.style.backgroundColor = '#333';
            hoverBtn.style.color = '#fff';

            // Deactivate normal mode styles
            normalBtn.style.backgroundColor = '#ededed';
            normalBtn.style.color = '#333';
        };

        // Normal mode function
        const normalMode = () => {
            grid.removeEventListener('mouseenter', hoverMode);

            // Event listener for normal click effect
            grid.addEventListener('click', () => {
                if (!hoverModeActive) {
                    grid.style.backgroundColor = colorPicker.value;
                }
            });
            normalBtn.style.backgroundColor = '#333';
            normalBtn.style.color = '#fff';

            hoverBtn.style.backgroundColor = '#ededed';
            hoverBtn.style.color = '#333';
        };

        let hoverModeActive = false;

        normalMode();

        // Event listener for normal mode button
        normalBtn.addEventListener('click', () => {
            normalMode();
            hoverModeActive = false;
        });
        // Event listener for hover mode button
        hoverBtn.addEventListener('click', () => {
            hoverMode();
            hoverModeActive = true;
        });

        // Event listener to clear grid cell
        clearBtn.addEventListener('click', () => {
            grid.style.backgroundColor = '';
        })
    }
}

// DEFAULT GRID SIZE
const defaultSize = 16;
gridRange.value = defaultSize;
createGrid(defaultSize);

// Event Listeners for GRID RANGE SELECTION
gridRange.addEventListener('input', () => {
    const gridSize = parseInt(gridRange.value);
    createGrid(gridSize);
});

// Event listener to generate random color
randomColor.addEventListener('click', () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        randomRGB = Math.floor(Math.random() * 16);
        color += letters[randomRGB];
    }
    randomColor.style.backgroundColor = '#333';
    randomColor.style.color = '#fff';
    colorPicker.value = color;
})
