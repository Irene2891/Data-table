import {data} from "./data.js";
import { formatDate } from "./helpers.js";

//Variables
const searchInput = document.querySelector('.searchInput');
const closeIcon= document.querySelector('.closeIcon');
const tableOfTasks= document.getElementById('table-of-tasks');
const emptyState= document.getElementById('empty-state');
const searchValue= document.getElementById('searchValue');
const description= document.querySelectorAll('.description');
const statusButtons =document.querySelectorAll('.btnStatus')

const taskData={
  taskList:data,
};


//To clear the input field
closeIcon.addEventListener('click',()=>{
    searchInput.value='';
    closeIcon.style.display='none';
    emptyState.style.display = 'none';
    generateTable(taskData.taskList);
});



// Function to filter data based on description and status
function filterData() {
  const selectedStatus = getStatusFilter();
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredData = taskData.taskList.filter((task) =>
    task.description.toLowerCase().includes(searchTerm) &&
    (selectedStatus === 'all' || task.status.toLowerCase() === selectedStatus)
  );

  if (filteredData.length === 0) {
    emptyState.style.display = 'block';
    searchValue.textContent = `"${searchTerm}" and status "${selectedStatus}"`;
  } else {
    emptyState.style.display = 'none';
  }

  generateTable(filteredData);
}

// Function to get the selected status filter
function getStatusFilter() {
  const selectedStatusButton = document.querySelector('.btnStatus.active');

  if (selectedStatusButton) {
    return selectedStatusButton.textContent.toLowerCase();
  }

  return;
}

// Add input event listener for general filtering
searchInput.addEventListener('input', () => {
  closeIcon.style.display = searchInput.value.trim() ? 'block' : 'none';
  filterData();
});

// Add click event listeners to each status button
statusButtons.forEach(button => {
  button.addEventListener('click', () => {
    statusButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    filterData();
  });
});


// To create the table body dynamically

 function generateTable(data){
  const tableBody=document.getElementById('tableBody');
  tableBody.innerHTML='';

  data.forEach((task, index)=>{
    const row = document.createElement('tr');
    // row.className= 'description'
    row.innerHTML = `
               <td><input type="checkbox" class="taskCheckox" 
               data-index="${index}"/> </td> 
                <td>${index + 1}</td>
                <td class='describe'>${task.description}</td>
                <td><button class="statusBtn ${task.status.toLowerCase().replace(/\s/g, "")}">${task.status}</button></td>
                <td>${formatDate(task.date)}</td>
                <td><button class="statusBtn ${task.priority.toLowerCase()}">${task.priority}</button></td>
                <td><span class="ellipsis">&#8942;</span></td>
            `;
            tableBody.append(row);
  });
}
generateTable(taskData.taskList);



/* pagination*/

const itemsPerPage = 10;
let currentPage = 1;

  function calculateTotalPages() {
    return Math.ceil(taskData.taskList.length / itemsPerPage);
  }

function displayTasks() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = taskData.taskList.slice(startIndex, endIndex);

  
  generateTable(currentTasks);

  document.getElementById('currentPage').textContent = currentPage;
  document.getElementById('total-page').textContent = calculateTotalPages();
  document.getElementById('total-no-items').textContent = `Of ${taskData.taskList.length}`;
  updateSelectPageDropdown();
}

 // Function to update select dropdown for page selection
 function updateSelectPageDropdown() {
  const selectDropdown = document.getElementById('selectPageDropdown');
  selectDropdown.innerHTML = '';

  for (let i = 1; i <= calculateTotalPages(); i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = ` ${i}`;
    selectDropdown.add(option);
  }

  selectDropdown.value = currentPage;
}


// Event listener for next button
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < calculateTotalPages()) {
    currentPage++;
    displayTasks();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayTasks();
  }
});

document.getElementById('selectPageDropdown').addEventListener('change', (e) => {
  currentPage = parseInt(e.target.value, 10);
  displayTasks();
});

displayTasks();



  
 // Elements for sorting
 const ascendingArrow = document.querySelector('[data-ascendingArrow]');
 const descendingArrow = document.querySelector('[data-descendingArrow]');
 
 
 // Event listener for ascending order
   ascendingArrow.addEventListener('click', () => {
    descendingArrow.style.color='';
    ascendingArrow.style.color=descendingArrow.style.color==='red' ? '' : 'red';
    let sortedDate= taskData.taskList.sort((a,b)=>b.date -a.date)
      generateTable(sortedDate);
 });
 
 // Event listener for descending order
 descendingArrow.addEventListener('click', () => {
  ascendingArrow.style.color='';
  descendingArrow.style.color=descendingArrow.style.color==='red' ? '' : 'red';
  let descendingSortedDate= taskData.taskList.sort((a,b)=>a.date -b.date)
    generateTable(descendingSortedDate);

 });
 
 
