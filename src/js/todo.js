document.addEventListener("DOMContentLoaded", function() {
  let tasks = [
    {
      text: "Инициализация проекта",
      id: new Date("11111").getDate,
      done: true,
      editing: false
    },
    {
      text: "Вывод существующих задач",
      id: new Date("22222"),
      done: false,
      editing: false
    },
    {
      text: "Добавление задачи",
      id: new Date("33333"),
      done: false,
      editing: false
    },
    {
      text: "Редактирование",
      id: new Date("44444"),
      done: false,
      editing: false
    },
    {
      text: "Удаление",
      id: new Date("55555"),
      done: false,
      editing: false
    },
    {
      text: "Фиксирование статуса задачи (выполнено/невыполнено)",
      id: new Date("66666"),
      done: false,
      editing: false
    },
    {
      text: "Перемещение по списку(кнопками)",
      id: new Date("77777"),
      done: false,
      editing: false
    }
  ];
  const $taskList = document.querySelector(".js-todo-list");
  const $addTaskButton = document.querySelector(".js-button");
  const $addTaskInput = document.querySelector(".js-input");

  //Отображение задач
  tasks.forEach(item => {
    $taskList.insertAdjacentHTML("beforeend", templateTask(item));
  });

  const $deleteButtons = document.querySelectorAll(".js-button-delete");

  //Добавление задачи
  $addTaskButton.addEventListener("click", function() {
    if ($addTaskInput.value === "") {
      return false;
    }
    const newTask = {
      text: $addTaskInput.value,
      done: false,
      editing: false,
      id: Date.now()
    };

    tasks.push(newTask);
    $taskList.insertAdjacentHTML("beforeend", templateTask(newTask));
    $addTaskInput.value = "";
    console.log(tasks);
    assignRemoveButton(
      $taskList.lastElementChild.querySelector(".js-button-delete")
    );
  });

  $deleteButtons.forEach(button => assignRemoveButton(button));

  //Удаление задачи
  function assignRemoveButton(button) {
    button.addEventListener("click", function(event) {
      const data = event.target.dataset;

      tasks = tasks.filter(item => item.id !== data.id);
      console.log(tasks);
      console.log(item.id);
      console.log(data.id);
      const childrenTaskList = $taskList.children;

      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          task.remove();
        }
      }
    });
  }

  const $editButtons = document.querySelectorAll(".js-button-edit");

  $editButtons.forEach(edit => assignEditButton(edit));

  //Редактирование задачи
  function assignEditButton(edit) {
    edit.addEventListener("click", function(event) {
      const data = event.target.dataset;
      const childrenTaskList = $taskList.children;
      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          const editField = task.querySelector(".todo-list__item-textfield");
          const currentTask = tasks.find(
            task => task.id.toString() === data.id
          );
          const editText = task.querySelector(".todo-list__item-text");
          currentTask.editing = !currentTask.editing;
          editText.classList.toggle(
            "todo-list__item-text-none",
            currentTask.editing
          );
          editField.classList.toggle(
            "todo-list__item-textfield-block",
            currentTask.editing
          );

          if (currentTask.editing) {
            edit.innerText = "Сохранить";
            editField.value = currentTask.text;
          } else {
            edit.innerText = "Изменить";
            currentTask.text = editField.value;
            editText.innerHTML = editField.value;
          }
          console.log("tasks", task);
        }
      }
    });
  }

  function templateTask(task) {
    return `<li class="todo-list__item" data-id="${task.id}">
      <p class="todo-list__item-text">${task.text}</p>
      <input class="todo-list__item-textfield" type="text" />
      <button class="todo-list__item-button js-button-edit" data-id="${task.id}">Изменить</button>
      <button class="todo-list__item-button js-button-delete" data-id="${task.id}">Удалить</button>
    </li>`;
  }
});
