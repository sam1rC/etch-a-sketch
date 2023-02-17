const gridSizeText = document.getElementById('gridSizeText');
const gridSize = document.getElementById('gridSize');
gridSize.onmousemove = (e)=> {updateGridSizeText(e.target.value)};

function updateGridSizeText(value)
{
    gridSizeValueText.textContent = `${value} x ${value}`;
}