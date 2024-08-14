
// let repeatTasks = JSON.parse(localStorage.getItem('repeatTasks')) || [];
// let form = document.getElementById("plannerForm");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const dayOfWeek = document.getElementById('day').value;
//     const task = document.getElementById('task').value;
//     const repeat = document.getElementById('repeatTask').checked;

//     if (dayOfWeek && task) {
//         addTask(dayOfWeek, task);

//         if (repeat) {
//             addRepeatTask(dayOfWeek, task)
//         }
//         // Reset the form
//         form.reset();
//     }
// });
// function addTask(dayOfWeek, task) {
//     const daySection = document.getElementById(dayOfWeek);
//     const taskDiv = daySection.querySelector('.tasks');

//     const taskItem = document.createElement('div');
//     taskItem.className = 'task-item';

//     const taskText = document.createElement('span');
//     taskItem.className = 'task-text';
//     taskText.textContent = task;

//     const editButton = document.createElement('button');
//     editButton.className = 'edit-btn';
//     // editButton.textContent = "Edit";
//     let editImg = document.createElement('img');
//     editImg.src = '/images/pen.png';
//     editImg.al = 'Edit';
//     editImg.width = 18;
//     editImg.height = 18;

//     editButton.appendChild(editImg);

//     editButton.addEventListener('click', function() {
//         editTask(taskItem, taskText, dayOfWeek);
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'delete-btn';
//     // deleteButton.textContent = "";
//     // create a new img and add path and append it to editbutton
//     let deleteImg = document.createElement('img');
//     deleteImg.src = '/images/bin.png';
//     deleteImg.al = 'Delete';
//     deleteImg.width = 18;
//     deleteImg.height = 18;

//     deleteButton.appendChild(deleteImg);
//     deleteButton.addEventListener('click', function() {
//         deleteTask(taskItem, dayOfWeek, task);
//     });

//     taskItem.appendChild(taskText);
//     taskItem.appendChild(editButton);
//     taskItem.appendChild(deleteButton);
//     taskDiv.appendChild(taskItem);
// }

// function editTask(taskItem, taskText, dayofweek) {
//     const newTask = prompt( `Edit your task: ${taskText.textContent}`);
//     if (newTask !== null && newTask.trim() !== '') {
//         taskText.textContent = newTask;
//         if (repeatTasks[dayofweek]) {
//             const index = repeat[dayofweek].indexOf(taskText.textContent);
//             if (index !== -1) {
//                 repeatTasks[dayofweek][index] = newTask;
//                 saveRepeatTasks();
//             }
//         }
//     }
// }

// function deleteTask(taskItem, dayofweek, task) {
//     taskItem.remove();
//     if (repeatTasks[dayofweek]) {
//         const index = repeatTasks[dayofweek].indexOf(task);
//         if (index !== -1) {
//             repeatTasks[dayofweek].splice(index, 1);
//             saveRepeatTasks();
//         }
//     }
// }

// function addRepeatTask(dayofweek, task) {
//     if (!repeatTasks[dayofweek]) {
//         repeatTasks[dayofweek] = [];
//     }
//     repeatTasks[dayofweek].push(task);
//     saveRepeatTasks();
// }
    
// function saveRepeatTasks() {
//     localStorage.setItem('repeatTasks', JSON.stringify(repeatTasks));
// }

// function loadRepeatTasks() {
//     for (const day in repeatTasks) {
//         repeatTasks[day].forEach(task => {
//             addTask(day, task);
//         });
//     }
    
// }

// // Initialize Sortable.js for each day's task list
// // const Thedays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// // Thedays.forEach(day => {
// //     const taskDiv = document.getElementById(day).querySelector('.tasks');
// //     new Sortable(taskDiv, {
// //         animation: 150,
// //         ghostClass: 'sortable-ghost'
// //     });
// // });

// loadRepeatTasks();

// // repeatingTasks = repeatingTasks.filter(task => !(task.day === dayOfWeek && task.text === taskText));
// // localStorage.setItem('repeatingTasks', JSON.stringify(repeatingTasks));

const form = document.getElementById('plannerForm');
let repeatTasks = JSON.parse(localStorage.getItem('repeatTasks')) || {};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const task = document.getElementById('task').value;
    const repeat = document.getElementById('repeatTask').checked;

    if (dayOfWeek && task) {
        addTask(dayOfWeek, task);

        if (repeat) {
            addRepeatTask(dayOfWeek, task);
        }

        form.reset();
    }
});

function addTask(dayOfWeek, task) {
    const daySection = document.getElementById(dayOfWeek);
    const taskDiv = daySection.querySelector('.tasks');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task;

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editTask(taskItem, taskText, dayOfWeek);
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteTask(taskItem, dayOfWeek, task);
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskDiv.appendChild(taskItem);
}

function editTask(taskItem, taskText, dayOfWeek) {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask;
        if (repeatTasks[dayOfWeek]) {
            const index = repeatTasks[dayOfWeek].indexOf(taskText.textContent);
            if (index !== -1) {
                repeatTasks[dayOfWeek][index] = newTask;
                saveRepeatTasks();
            }
        }
    }
}

function deleteTask(taskItem, dayOfWeek, task) {
    taskItem.remove();
    if (repeatTasks[dayOfWeek]) {
        const index = repeatTasks[dayOfWeek].indexOf(task);
        if (index !== -1) {
            repeatTasks[dayOfWeek].splice(index, 1);
            saveRepeatTasks();
        }
    }
}

function addRepeatTask(dayOfWeek, task) {
    if (!repeatTasks[dayOfWeek]) {
        repeatTasks[dayOfWeek] = [];
    }
    repeatTasks[dayOfWeek].push(task);
    saveRepeatTasks();
}

function saveRepeatTasks() {
    localStorage.setItem('repeatTasks', JSON.stringify(repeatTasks));
}

function loadRepeatTasks() {
    for (const day in repeatTasks) {
        repeatTasks[day].forEach(task => {
            addTask(day, task);
        });
    }
}

// Initialize Sortable.js for each day's task list
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// days.forEach(day => {
//     const taskDiv = document.getElementById(day).querySelector('.tasks');
//     new Sortable(taskDiv, {
//         animation: 150,
//         ghostClass: 'sortable-ghost'
//     });
// });

// Load repeating tasks on page load
loadRepeatTasks();