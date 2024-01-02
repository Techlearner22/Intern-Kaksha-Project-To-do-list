function addTask() {
    var taskInput = document.getElementById('newTaskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () { editTask(taskText); };
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () { deleteTask(li); };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function editTask(taskText) {
    var newText = prompt('Edit task:', taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

function deleteTask(li) {
    var confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        li.remove();
    }
}
