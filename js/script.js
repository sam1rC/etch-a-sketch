const gridSizeText = document.getElementById('gridSizeText');
const gridSize = document.getElementById('gridSize');
const grid = document.querySelector('.container');
const colorPicker = document.getElementById('colorPicker');
const eraser = document.getElementById('eraser');

window.addEventListener('DOMContentLoaded',()=>{
    updateGridSizeText(gridSize.value);
    upgradeGrid(gridSize.value,grid);
})


gridSize.addEventListener('mousemove',(e)=>{updateGridSizeText(e.target.value)});
gridSize.addEventListener('mouseup',(e)=>{upgradeGrid(e.target.value,grid)});

eraser.addEventListener('click', ()=>{colorPicker.value = "#FFFFFF"});

function updateGridSizeText(value)
{
    gridSizeText.textContent = `${value} x ${value}`;
}

function upgradeGrid(value,container)
{   
    removeAllChilds(container);
    for(let i=0;i<value*value;i++)
    {
        const gridChild = document.createElement('div');
        gridChild.setAttribute('style',`width: calc(100%/${value});height: calc(100%/${value}); border: 1px solid red;`);
        gridChild.addEventListener('mouseover', changeColor);
        container.appendChild(gridChild);
    }
}


function removeAllChilds(parent)
{
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}


function changeColor()
{
    this.style.backgroundColor = `${colorPicker.value}`;
}