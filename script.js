const generateButton = document.getElementById('generate-btn');
const palatteContainer = document.getElementById('palette-container');


generateButton.addEventListener('click', generatePalette);

function generatePalette() {
    const colors = []

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.floor(random() * 16))];
    }
}

generatePalette();