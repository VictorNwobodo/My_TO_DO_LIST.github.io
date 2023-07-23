let taskList = [];

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <span class="icons">
                <span class="edit-icon" onclick="editTask(${index})"></span>
                <span class="delete-icon" onclick="deleteTask(${index})"></span>
            </span>
        `;
        list.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        taskList.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt('Edit the task:', taskList[index]);
    if (newTask !== null && newTask.trim() !== '') {
        taskList[index] = newTask;
        renderTasks();
    }
}

window.onload = () => {
    renderTasks();
};
