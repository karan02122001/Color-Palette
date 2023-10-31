const colors = [];

function generateColor() {
    const colorPalette = document.getElementById("colorPalette");
    const newColor = getRandomColor();
    colors.push(newColor);

    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = newColor;
    colorPalette.appendChild(colorBox);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}