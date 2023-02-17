const gridSizeValueText = document.getElementById('gridSizeValueText');
const gridSize = document.getElementById('gridSize');
gridSize.onmousemove = (e)=> {updateGridSizeValueText(e.target.value)};

function updateGridSizeValueText(value)
{
    gridSizeValueText.textContent = `${value} x ${value}`;
}