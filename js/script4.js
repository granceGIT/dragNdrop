const dropZone = document.querySelector('.completed-tasks')
const addTask = document.querySelector('#add-task')
const inputValue = document.querySelector('#new-task-title')
const currentTasks = document.querySelector('#current-tasks')
const completedTasks = document.querySelector('#completed-tasks')


let dragTask = null;

addTask.addEventListener('click',(e)=>{
    e.preventDefault();
    let newTask = document.createElement('div')
    newTask.classList.add('current-tasks__item')
    newTask.draggable = true
    newTask.innerHTML = `<span>${inputValue.value}</span>`
    currentTasks.append(newTask)

    newTask.addEventListener('dragstart', dragStart);
    newTask.addEventListener('dragend', dragEnd);
})

currentTasks.addEventListener('dragover', dragOver);
currentTasks.addEventListener('drop', dragDrop);
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', dragDrop);

function dragStart(e) {
    dragTask = e.target
    setTimeout(() => e.target.style.visibility = 'hidden', 0);
}

function dragEnd(e) {
    e.target.style.visibility = '';
}

function dragOver(e) {
    e.preventDefault();
}


function dragDrop(e) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('completed-tasks')){
        dragTask.classList.remove('current-tasks__item')
        dragTask.classList.add('completed-tasks__item')
    }
    else{
        dragTask.classList.add('current-tasks__item')
        dragTask.classList.remove('completed-tasks__item')
    }
    e.currentTarget.append(dragTask)
}