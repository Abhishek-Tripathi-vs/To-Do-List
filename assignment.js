// Function for creating new Task
function createTaskElement(taskContent) {
  const li = document.createElement("li");
  li.textContent = taskContent;

  // Add event listener to mark task as completed when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Adding delete button to each task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent li click event from triggering
    li.remove();
  });

  li.appendChild(deleteButton);
  return li;
}

// Function for adding new Task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskContent = taskInput.value.trim();
  if (taskContent !== "") {
    const taskList = document.getElementById("taskList");
    const taskElement = createTaskElement(taskContent);
    taskList.appendChild(taskElement);
    taskInput.value = "";
  }
}

// Event listener for adding tasks when Enter key is pressed
document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
