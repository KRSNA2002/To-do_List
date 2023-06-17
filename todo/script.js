const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

let tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

function addTask() {
  const task = input.value.trim();
  if (task !== '') {
    tasks.push(task);
    input.value = '';
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('change', () => {
      li.classList.toggle('completed');
    });
    const span = document.createElement('span');
    span.className = 'task';
    span.innerText = task;
    const button = document.createElement('button');
    button.className = 'delete';
    button.innerText = 'Delete';
    button.addEventListener('click', () => {
      deleteTask(index);
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
  });
}
