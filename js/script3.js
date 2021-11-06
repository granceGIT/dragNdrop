let draggableItems = document.querySelectorAll('.draggableImage'),
    dropZones = document.querySelectorAll('.dropzone'),
    startCells = document.querySelectorAll('.draggable')

let dragItem = null,
dragSource = null,
amountOfPredators = 6;

draggableItems.forEach(dragItem=>{
    dragItem.addEventListener('dragstart', dragStart);
    dragItem.addEventListener('dragend', dragEnd);

})

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', dragDrop);
})

startCells.forEach(cell=>{
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', dragDrop);
})

function dragStart(e) {
    dragSource = e.target.closest('.dropzone')
    dragItem = e.target
    setTimeout(() => e.target.style.display = 'none', 0);
}

function dragEnd(e) {
    e.target.style.display = '';
}

function dragOver(e) {
    e.preventDefault();
}


function dragDrop(e) {
    e.preventDefault();
    if (e.target.tagName!='IMG'){
        e.target.append(dragItem)
        if(dragItem.dataset.type==='predator'){
            changeVisual(dragSource,e.target.closest('.dropzone'),'predatorPicked')
            if (amountOfPredators == countPredators()) output.textContent=`Поздравляю, задача решена!`
            else output.textContent=''
        }
    }
}

function countPredators(){
    return document.querySelectorAll('.dropzone>img[data-type="predator"]').length
}

function changeVisual(elementSource,elementToChange,className){
    if (elementSource != null) elementSource.classList.remove(className)
    if (elementToChange != null) elementToChange.classList.add(className)
}