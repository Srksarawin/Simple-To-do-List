document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        li.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);

        taskInput.value = '';
    }
}
