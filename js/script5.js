let draggableItems = document.querySelectorAll('.draggableImage'),
    dropZones = document.querySelectorAll('.dropzone'),
    startCells = document.querySelectorAll('.puzzlecell')

let dragItem = null,
    dragSource = null;

draggableItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', dragStart);
    dragItem.addEventListener('dragend', dragEnd);

})

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', dragDrop);
})

startCells.forEach(cell => {
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
    if (e.target.tagName != 'IMG') {
        e.target.append(dragItem)
        if(countCorrect()==document.querySelectorAll('.draggableImage').length) result.textContent = "Пазл собран, поздравляю!"
    }
}

function countCorrect() {
    let counter = 0;
    document.querySelectorAll('.dropzone>.draggableImage').forEach((item,index)=>{
        if(item.dataset.position==index+1) counter++
    })
    return counter
}