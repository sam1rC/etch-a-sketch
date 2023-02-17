const gridSizeText = document.getElementById('gridSizeText');
const gridSize = document.getElementById('gridSize');
const grid = document.querySelector('.container');


gridSize.addEventListener('mousemove',(e)=>{updateGridSizeText(e.target.value)});
gridSize.addEventListener('mouseup',(e)=>{upgradeGrid(e.target.value)});


function updateGridSizeText(value)
{
    gridSizeText.textContent = `${value} x ${value}`;
}

function upgradeGrid(value)
{   
    removeAllChilds();
    for(let i=0;i<value*value;i++)
    {
        const gridChild = document.createElement('div');
        gridChild.setAttribute('style',`width: calc(100%/${value});height: calc(100%/${value}); border: 1px solid red;`);
        grid.appendChild(gridChild);
    }
}


function removeAllChilds()
{
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
}