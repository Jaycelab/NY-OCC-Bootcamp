// Accessing/Target elements
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");

// Targeting Errror elements
const taskError = document.querySelector("#taskError");

// Adding event listener for form submission
form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", addTask);

// Form submission event handler
function handleSubmit(e) {
  e.preventDefault();

  // Form Validation
  const isValid = validateForm();
  if (isValid) {
    console.log("Task sucessfully submitted");
  }
}

// // Function to add a task
function validateForm() {
  const taskValue = taskInput.value.trim();
  let isValid = true;

  if (taskValue === "") {
    taskError.textContent = "Task is required";
    isValid = False;
  } else {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    taskInput.value = " ";
  }
  return isValid;
}

// Function to delete a task

let listContainer = document.getElementById("taskList");
let elementToRemove = listContainer.children[0];
elementToRemove.remove();
console.log("Removed Element:", elementToRemove);
