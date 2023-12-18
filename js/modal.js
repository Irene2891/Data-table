import { data } from "./data.js";
  //   document.addEventListener('DOMContentLoaded', () => {
  //   const userName = "Irene Ezechi";
  //   document.body.insertAdjacentHTML('afterbegin', `<p>Welcome, <b>${userName}</b>.</p>
  //   <p>Here is your task for the day.</p>`);
  // });

  const taskData={
    taskList:data,
  };

 const addTaskModal=document.getElementById('addTaskModal');
 const openAddTaskModal =document.getElementById('openAddTaskModal');
 const taskDate= document.getElementById('taskDate');
 const closeButton=document.getElementById('closeButton');
 const addTaskBtn=document.getElementById('addTaskBtn')
 const taskStatus=document.querySelectorAll('.task-status');
 const statusOfTask=document.getElementById('taskStatus');
  const taskPriority=document.querySelectorAll('.task-priority');
  const taskPriorities=document.getElementById('taskPriority')
  const descriptionError= document.getElementById('descriptionError');
  const statusError=document.getElementById('statusError');
  const dateError=document.getElementById('dateError');
 const priorityError= document.getElementById('priorityError');
 const textarea = document.querySelector("[data-textarea]");
 const time = document.querySelector("[data-date]")
 const openFilterModal =document.getElementById('openFilterModal');
 const filterModal=document.getElementById('filterModal');

 const newTask ={
  id: Math.random(),
  description: "",
  status: "",
  date:"",
  priority:""
};

const validateForm =() =>{
  if (!newTask.description) {
   descriptionError.innerText = 'Please Describe your task.';
    
  }else{
    descriptionError.innerText ='';
  }

  if (!newTask.status) {
   statusError.innerText = 'Please select a status.';
    
  }else{
    statusError.innerText ='';
  }

  if (!newTask.date) {
    dateError.innerText = 'Please select a date.';
    
  }else{
    dateError.innerText ='';
  }

  if (!newTask.priority) {
    priorityError.textContent = 'Please select a priority.';
    
  }else{
    priorityError.innerText ='';
  }
}

    openAddTaskModal.addEventListener('click', () => {
    addTaskModal.style.display = 'block';
   taskDate.valueAsDate = new Date();
  });


  openFilterModal.addEventListener('click', () => {
    filterModal.style.display = 'block';
  });
  //  closing the modal both within and outside
    closeButton.addEventListener('click', () => {
      closeAddTaskModal()
  });
  
     addTaskModal.addEventListener('click', (e) => {
    if(e.target=== addTaskModal){
      closeAddTaskModal();
    }
  });

      
   addTaskBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    validateForm()

    // taskData.taskList.push(newTask);

    // generateTable(taskData.taskList);

    // closeAddTaskModal();
  
    
 })


 taskStatus.forEach((statusButton) => {
  statusButton.addEventListener('click', (e) => {
    e.preventDefault()
    taskStatus.forEach((button) => {button.classList.remove('selected')});
    
    e.target.classList.add('selected');

    statusOfTask.value = statusButton.dataset.status;
  })
});


taskPriority.forEach((priorityButton) => {
  priorityButton.addEventListener('click', (e) => {
    e.preventDefault()
   taskPriority.forEach((button) => {button.classList.remove('selected')});
    
   e.target.classList.add('selected');
   taskPriorities.value = priorityButton.dataset.priority;
  })
});

textarea.addEventListener('input', (e) => {
  newTask.description = e.target.value;
});

time.addEventListener('input', (e) => {
  let timeStamp = new Date(e.target.value).getTime();

  let date = new Date();
  let dateInput = `${date.getDate()}th ${new Date(timeStamp).toLocaleDateString(
    "en-GB",
    {
      month: "short",
    }
  )}, ${date.getFullYear()}`;
  newTask.date = dateInput;
});



   




  


  
closeAddTaskModal();




  function closeAddTaskModal(){
    addTaskModal.style.display = 'none';

  }
  

 