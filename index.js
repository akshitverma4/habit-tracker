document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("habitForm");

  // Attach the event listener to the form element
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    addTask();
  });

  function addTask() {
    const habitName = document.getElementById("habitname").value;

    if (habitName.trim() !== "") { // Ensure habit name is not empty
      const listItem = document.createElement("LI");
      const textNode = document.createTextNode(habitName);
      listItem.appendChild(textNode);

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.marginLeft = "10px";

      // Create task done button
      const doneButton = document.createElement("button");
      doneButton.textContent = "Done";
      doneButton.style.marginLeft = "10px";

      // Append delete button to the list item
      listItem.appendChild(deleteButton);

      // Append task done button to the list item
      listItem.appendChild(doneButton);

      // Append list item to the task list
      document.getElementById("tasklist").appendChild(listItem);

      // Add event listener to the delete button
      deleteButton.addEventListener("click", function () {
        deleteTask(listItem);
      });

      // Add event listener to the task done button
      doneButton.addEventListener("click", function () {
        doneTask(listItem);
      });

      // Clear input after adding task
      document.getElementById("habitname").value = "";
    }
  }

  function deleteTask(listItem) {
    listItem.remove();
  }

  function doneTask(listItem) {
    listItem.style.backgroundColor = "lightgreen";
  }
});
