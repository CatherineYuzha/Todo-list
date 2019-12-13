document.addEventListener("DOMContentLoaded", function() {
  let tasks = [
    {
      text: "Заметка",
      identifier: 1,
      done: true,
      edit: false
    },
    {
      text: "Заметка 1",
      identifier: 2,
      done: false,
      edit: false
    },
    {
      text: "Заметка 2 ",
      identifier: 3,
      done: false,
      edit: false
    }
  ];
  const $taskList = document.querySelector(".js-todo-list");
  const $buttonAddTask = document.querySelector(".js-button");
  const $inputAddTask = document.querySelector(".js-input");

  tasks.forEach(item => {
    $taskList.insertAdjacentHTML("beforeend", templateTask(item));
  });

  const $buttons = document.querySelectorAll(".js-button-delete");

  $buttonAddTask.addEventListener("click", function() {
    if ($inputAddTask.value === "") {
      return false;
    }
    const newTask = {
      text: $inputAddTask.value,
      done: false,
      edit: false,
      identifier: tasks.length + 1
    };

    tasks.push(newTask);
    $taskList.insertAdjacentHTML("beforeend", templateTask(newTask));
    $inputAddTask.value = "";
    removeButton($taskList.lastElementChild.querySelector(".js-button-delete"));
  });

  $buttons.forEach(button => removeButton(button));

  function removeButton(button) {
    button.addEventListener("click", function(event) {
      const data = event.target.dataset;

      tasks = tasks.filter(item => item.dataPosition !== data.id);

      const childrensTaskList = $taskList.children;

      for (let task of childrensTaskList) {
        if (task.dataset.id === data.id) {
          task.remove();
        }
      }
    });
  }

  function templateTask(task) {
    return `  <li class="todo-list__item" data-id="${task.identifier}">
      <p class="todo-list__item-text">${task.text}</p>
      <input class="todo-list__item-textfield" type="text" />
      <button class="todo-list__item-button">Изменить</button>
      <button class="todo-list__item-button js-button-delete" data-id="${task.identifier}">Удалить</button>
    </li> `;
  }
});
