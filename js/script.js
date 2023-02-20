const gridSizeText = document.getElementById('gridSizeText');
const gridSize = document.getElementById('gridSize');
const grid = document.querySelector('.container');
const colorPicker = document.getElementById('colorPicker');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const mode = document.getElementById('mode');
let click = true;

window.addEventListener('DOMContentLoaded',()=>{
    updateGridSizeText(gridSize.value);
    upgradeGrid(gridSize.value,grid);
    mode.textContent = "Mode: Coloring";
})


gridSize.addEventListener('mousemove',(e)=>{updateGridSizeText(e.target.value)});
gridSize.addEventListener('mouseup',(e)=>{upgradeGrid(e.target.value,grid)});

eraserBtn.addEventListener('click', ()=>{colorPicker.value = "#FFFFFF"});

clearBtn.addEventListener('click',()=>{clearGrid()});

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
        gridChild.setAttribute('style',`width: calc(100%/${value});height: calc(100%/${value});`);
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
    if(click)
    {
        this.style.backgroundColor = `${colorPicker.value}`;
    }
    
}

function clearGrid()
{
    let table = document.querySelectorAll("div");
    table.forEach((square) => square.style.backgroundColor = "#FFFFFF");
}

document.querySelector('body').addEventListener('click',(e)=>{
    if(e.target.tagName != "BUTTON")
    {
        click = !click;
        if(click)
        {
            mode.textContent = "Mode: Coloring";
        }
        else
        {
            mode.textContent = "Mode: Not Coloring";
        }
    }
    
})