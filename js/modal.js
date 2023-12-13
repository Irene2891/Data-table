
    document.addEventListener('DOMContentLoaded', () => {
    const userName = "Irene Ezechi";
    document.body.insertAdjacentHTML('afterbegin', `<p>Welcome, <b>${userName}</b>.</p>
    <p>Here is your task for the day.</p>`);
  });
 

    document.getElementById('openAddTaskModal').addEventListener('click', () => {
    document.getElementById('addTaskModal').style.display = 'block';
    
    document.getElementById('taskDate').valueAsDate = new Date();
  });

  //  closing the modal both within and outside
        document.getElementById('closeButton').addEventListener('click', () => {
          closeAddTaskModal()
      });
      document.getElementById('addTaskModal').addEventListener('click', (e) => {
    if(e.target=== document.getElementById('addTaskModal')){
      closeAddTaskModal();
    }
      });

      
    document.getElementById('addTaskBtn').addEventListener('click', () =>{

    validateForm();
      });

  document.querySelectorAll('.task-status').forEach((statusButton) => {
  statusButton.addEventListener('click', () => {
                  console.log('status button:', statusButton.dataset.status);

    document.querySelectorAll('.task-status').forEach(button => button.classList.remove('selected'));
    
    statusButton.classList.add('selected');

    document.getElementById('taskStatus').value = statusButton.dataset.status;
  });
});

document.querySelectorAll('.task-priority').forEach((priorityButton) => {
  priorityButton.addEventListener('click', () => {
              console.log('status button:', priorityButton.dataset.priority);

    document.querySelectorAll('.task-priority').forEach(button => button.classList.remove('selected'));
    
    priorityButton.classList.add('selected');

    document.getElementById('taskPriority').value = priorityButton.dataset.priority;
  });
});









      document.querySelectorAll('task-status').forEach((statusButton)=>{
        statusButton.addEventListener('click', () =>{
          console.log('status button:', statusButton.dataset.status);
          document.getElementById('taskStatus').value=statusButton.dataset.status;
        });
      });

      document.querySelectorAll('task-priority').forEach((priorityButton)=>{
        priorityButton.addEventListener('click', () =>{
          console.log('status button:', priorityButton.dataset.status);
          document.getElementById('task-priority').value=priorityButton.dataset.priority;
        });
      });


  function addTask(description, status, date, priority){
    const newTask ={
      id: Math.random(),
      description: description,
      status: status,
      date:date,
      priority:priority,
    };

    taskData.taskList.push(newTask);

    generateTable(taskData.taskList);

    closeAddTaskModal();
  }

function validateForm() {
  const description = document.getElementById('taskDescription').value;
  const status = document.getElementById('taskStatus').value;
  const date = document.getElementById('taskDate').value;
  const priority = document.getElementById('taskPriority').value;

  document.getElementById('descriptionError').textContent = '';
  document.getElementById('statusError').textContent = '';
  document.getElementById('dateError').textContent = '';
  document.getElementById('priorityError').textContent = '';

  if (!description) {
    document.getElementById('descriptionError').textContent = 'Please enter a description.';
    return;
  }

  if (!status) {
    document.getElementById('statusError').textContent = 'Please select a status.';
    return;
  }

  if (!date) {
    document.getElementById('dateError').textContent = 'Please select a date.';
    return;
  }

  if (!priority) {
    document.getElementById('priorityError').textContent = 'Please select a priority.';
    return;
  }

  addTask(description, status, date, priority);

closeAddTaskModal();
}



  function closeAddTaskModal(){
    document.getElementById('addTaskModal').style.display = 'none';

  }
  