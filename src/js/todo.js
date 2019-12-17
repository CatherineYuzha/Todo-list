document.addEventListener("DOMContentLoaded", function() {
  let tasks = [
    {
      text: "Инициализация проекта",
      id: generation(),
      done: true,
      editing: false
    },
    {
      text: "Вывод существующих задач",
      id: generation(),
      done: false,
      editing: false
    },
    {
      text: "Добавление задачи",
      id: generation(),
      done: false,
      editing: false
    },
    {
      text: "Редактирование",
      id: generation(),
      done: true,
      editing: false
    },
    {
      text: "Удаление",
      id: generation(),
      done: true,
      editing: false
    },
    {
      text: "Фиксирование статуса задачи (выполнено/не выполнено)",
      id: generation(),
      done: true,
      editing: false
    },
    {
      text: "Перемещение по списку кнопками",
      id: generation(),
      done: true,
      editing: false
    }
  ];
  const $taskList = document.querySelector(".js-todo-list");
  const $addTaskButton = document.querySelector(".js-button");
  const $addTaskInput = document.querySelector(".js-input");

  tasks.forEach(item => {
    $taskList.insertAdjacentHTML("beforeend", templateTask(item));
  });

  const $deleteButtons = document.querySelectorAll(".js-button-delete");

  $addTaskButton.addEventListener("click", function() {
    if ($addTaskInput.value === "") {
      return false;
    }

    const newTask = {
      text: $addTaskInput.value,
      done: false,
      editing: false,
      id: generation()
    };

    tasks.push(newTask);
    $taskList.insertAdjacentHTML("beforeend", templateTask(newTask));
    $addTaskInput.value = "";
    assignRemoveButton(
      $taskList.lastElementChild.querySelector(".js-button-delete")
    );
    assignEditButton(
      $taskList.lastElementChild.querySelector(".js-button-edit")
    );
  });

  $deleteButtons.forEach(button => assignRemoveButton(button));

  function assignRemoveButton(button) {
    button.addEventListener("click", function(event) {
      const data = event.target.dataset;

      tasks = tasks.filter(item => item.id !== data.id);

      const childrenTaskList = $taskList.children;

      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          task.remove();
        }
      }
    });
  }

  const $editButtons = document.querySelectorAll(".js-button-edit");

  $editButtons.forEach(button => assignEditButton(button));

  function assignEditButton(button) {
    button.addEventListener("click", function(event) {
      const data = event.target.dataset;
      const childrenTaskList = $taskList.children;
      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          const $editField = task.querySelector(".todo-list__item-textfield");
          const currentTask = tasks.find(task => task.id === data.id);
          const $editText = task.querySelector(".todo-list__item-text");

          currentTask.editing = !currentTask.editing;
          $editText.classList.toggle(
            "todo-list__item-text_none",
            currentTask.edit
          );
          $editField.classList.toggle(
            "todo-list__item-textfield_block",
            currentTask.editing
          );

          if (currentTask.editing) {
            button.innerText = "Сохранить";
            $editField.value = currentTask.text;
          } else {
            button.innerText = "Изменить";
            currentTask.text = $editField.value;
            $editText.innerHTML = $editField.value;
          }
        }
      }
    });
  }

  function assignCompletedTask(text) {
    text.addEventListener("click", function(event) {
      const data = event.target.dataset;
      const childrenTaskList = $taskList.children;
      const $editText = task.querySelector(".todo-list__item-text");

      childrenTaskList.find(task => task.id === data.id);
      if (task.dataset.id === data.id) {
        const currentTask = tasks.find(task => task.id === data.id);

        currentTask.done = !currentTask.done;
        $editText.classList.toggle(
          "todo-list__item-text__done-text",
          currentTask.done
        );
      }
    });
  }

  function templateTask(task) {
    return `<li class="todo-list__item" data-id="${task.id}">
    <p class="todo-list__item-text js-text">${task.text}</p>
    <input class="todo-list__item-textfield" type="text" />
    <button class="todo-list__item-button js-button-edit" data-id="${task.id}">Изменить</button>
    <button class="todo-list__item-button js-button-delete" data-id="${task.id}">Удалить</button>
    </li>`;
  }

  function generation() {
    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substr(2)}`;
  }
});
