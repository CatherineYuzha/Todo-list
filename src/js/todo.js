document.addEventListener("DOMContentLoaded", function() {
  const todos = [
    {
      text: "Заметка",
      done: true,
      edit: false
    },
    {
      text: "Заметка 1",
      done: false,
      edit: false
    },
    {
      text: "Заметка 2 ",
      done: false,
      edit: false
    }
  ];

  const $taskList = document.querySelector(".js-todo-list");
  let html = "";
  const buttonAddTask = document.querySelector(".js-button");
  const inputAddTask = document.querySelector(".js-input");

  todos.forEach(
    item =>
      (html += `  <li class="todo-list__item">
      <p class="todo-list__item-text">${item.text}</p>
      <input class="todo-list__item-textfield" type="text" />
      <button class="todo-list__item-button">Изменить</button>
      <button class="todo-list__item-button">Удалить</button>
    </li> `)
  );

  $taskList.innerHTML = html;

  buttonAddTask.addEventListener("click", function() {
    todos.push({ text: inputAddTask });

    $taskList.innerHTML += `  <li class="todo-list__item">
      <p class="todo-list__item-text">${inputAddTask}</p>
      <input class="todo-list__item-textfield" type="text" />
      <button class="todo-list__item-button">Изменить</button>
      <button class="todo-list__item-button">Удалить</button>
    </li> `;
  });
});
