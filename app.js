document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
  
    if (taskText === '') return;
  
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
  
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
  
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
  
    li.querySelector('.delete-button').addEventListener('click', function() {
      taskList.removeChild(li);
    });
  
    taskList.appendChild(li);
    taskInput.value = '';
  });
  