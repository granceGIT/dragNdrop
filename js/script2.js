let dragItem = document.querySelector('#draggable'),
    dropZones = document.querySelectorAll('.dropzone');

dragItem.addEventListener('dragstart', dragStart);
dragItem.addEventListener('dragend', dragEnd);

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('dragenter', dragEnter);
    zone.addEventListener('drop', dragDrop);
    zone.addEventListener('dragleave', dragLeave);
})

function dragStart(e) {
    dragItem.classList.add('drag-start');
    setTimeout(() => dragItem.style.display = 'none', 0);
}

function dragEnd() {
    dragItem.classList.remove('drag-start');
    dragItem.style.display = '';
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drop-enter');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drop-enter');
}

function dragDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drop-enter')

    e.target.prepend(dragItem);
}