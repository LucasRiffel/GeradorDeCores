function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = generateColor();
    document.body.style.backgroundColor = newColor;

    const corGerada = document.getElementById('corGerada');
    corGerada.innerHTML = ` ${newColor}`;
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

