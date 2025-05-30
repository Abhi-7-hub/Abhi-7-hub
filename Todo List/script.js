let addButton = document.getElementById("add-task-btn");
let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
    let taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task before adding.");
        return;
    }

    let listItem = document.createElement("li");
    listItem.classList.add("task-item");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.innerText = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
});
