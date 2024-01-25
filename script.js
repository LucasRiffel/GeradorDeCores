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
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

function copyColorCode() {
    const colorCode = document.body.style.backgroundColor;
    navigator.clipboard.writeText(colorCode).then(function() {
        alert('Código da cor copiado para a área de transferência: ' + colorCode);
    }, function() {
        alert('Erro ao copiar o código da cor.');
    });
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
document.getElementById('copyButton').addEventListener('click', copyColorCode);
