// Accessing/Target elements
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");

// Adding event listener for form submission
form.addEventListener("submit", handleSubmit);
form.addEventListener("remove", removeItem);
// Function to add a task
function handleSubmit(e) {
  e.preventDefault();

  let newItem = document.createElement("li");
  newItem.setAttribute("class", "list");

  li.appendChild(document.createTextNode(newItem));
}

// Function to delete a task
