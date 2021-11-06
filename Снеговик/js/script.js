const draggableItems = document.querySelectorAll('img[draggable="true"]');
let dragItem = null;
let x =0;
let y = 0;


draggableItems.forEach(item=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
})
document.body.addEventListener('dragover', dragOver)
document.body.addEventListener('drop', drop)


function dragStart(e) {
    dragItem = e.target;
    x = e.offsetX;
    y = e.offsetY;

    resetZIndex()
    dragItem.style.zIndex = 10;
    
}



function dragEnd(e) {
    e.preventDefault();
}

function dragOver(e){
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    dragItem.style.left = `${(e.pageX - x)}px`
    dragItem.style.top = `${(e.pageY - y)}px`
}

function resetZIndex(){
    draggableItems.forEach(item => {
        item.style.zIndex = 5;
    })
}