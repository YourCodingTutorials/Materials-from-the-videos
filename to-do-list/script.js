const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

window.addEventListener('load', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskElement(task);
    });
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = { id: Date.now(), text: taskText };
        addTaskElement(task);
        saveTask(task);
        taskInput.value = '';
    }
}

function addTaskElement(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    li.innerHTML = `<span>${task.text}</span>
    <button class="edit" onclick="editTask(${task.id})">Edit</button>
    <button class="delete" onclick="deleteTask(${task.id})">Delete</button>`;
    taskList.appendChild(li);
}

function deleteTask(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);   
    li.remove();
    removeTaskFromLocalStorage(id);
}

function editTask(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);
    const taskText = li.querySelector('span').textContent;
    const newText = prompt('Edit task:', taskText);
    if (newText !== null && newText.trim() !== '') {
        li.querySelector('span').textContent = newText;
        updateTaskInLocalStorage(id, newText);
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(id, newText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.text = newText;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
