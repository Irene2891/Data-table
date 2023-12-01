
//Variables
const searchInput = document.querySelector('.searchInput');
const closeIcon= document.querySelector('.closeIcon');
const tableOfTasks= document.querySelector('.tableOfTasks');
const emptyState= document.querySelector('.emptyState');
const searchValue= document.querySelector('.searchValue');
const description= document.querySelectorAll('.description');

const taskData={
  taskList:data,
};



function getCurrentDate() {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date('Nov.,24,2023').toLocaleDateString('en-US', options);
}

//To clear the input field
closeIcon.addEventListener('click',()=>{
    searchInput.value='';
    closeIcon.style.display='none';
});

//To remove the close icon alongside deletion
searchInput.addEventListener('input', (e)=>{
    const value = e.target.value.trim();
    closeIcon.style.display=searchInput.value ? 'block': 'none';

});

function generateTable(data){
  const tableBody=document.querySelector('#tableBody');
  tableBody.innerHTML="";

  data.forEach(task=>{
    const row = document.createElement('tr')
    // tr.className= 'description'
    row.innerHTML = `
                <td>${task.id}</td>
                <td class='describe'>${task.description}</td>
                <td><button class="statusBtn ${task.status}">${task.status}</button></td>
                <td>${task.date}</td>
                <td><button class="statusBtn ${task.priority}">${task.priority}</button></td>
                <td>&#8942;</td>
            `;
            tableBody.appendChild(tr);
  });
}
generateTable(data);

searchInput.addEventListener('input', ()=> {
  const value= searchInput.value;
  const dataDupli = [...taskData.taskList]
  const data = dataDupli.filter((task) => 
  task.description.toLowerCase().includes(value.toLowerCase())
  );
  if (data.length===0){
    tableBody.style.display= 'hidden';
    searchValue.textContent=`"${value}"`
    emptyState.style.display="block"

  }else{
    tableBody.style.display="visible";
    searchValue.textContent=''
    emptyState.style.display="none"
  }
  generateTable(data);
});

  


























searchInput.addEventListener('input',filterTasks);
function filterTasks() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTasks = data.filter(task =>
   task.description.toLowerCase().includes(searchTerm) 
  );

  // Update the UI based on the search result
  if (filteredTasks.length > 0) {
    displayTasks(filteredTasks);
    hideEmptyState();
  } else {
    displayEmptyState(searchTerm);
    hideTasks();
  } 
}

function displayTasks(filteredTasks) {
  tableOfTasks.innerHTML = '';
  filteredTasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.textContent = task.description;
    tableOfTasks.appendChild(taskElement);
  });
}  
function displayEmptyState(searchTerm) {
  // searchValueSpan.textContent=searchTerm;
  emptyState.style.display = 'block';
}

function hideEmptyState() {
  emptyState.style.display = 'none';
}

function hideTasks() {
 tableOfTasks.innerHTML='';
}



