document.addEventListener("DOMContentLoaded", function() {
  const todos = [
    {
      text: "Заметка",
      done: true,
      edit: false
    },
    {
      text: "заметка1",
      done: false,
      edit: false
    },
    {
      text: "заметка2",
      done: false,
      edit: false
    }
  ];

  const task = document.querySelector(".js-todo-list");
  let html = "";

  todos.map(
    item =>
      (html += `  <li class="todo-list__item">
      <p class="todo-list__item-text">${item.text}</p>
      <input class="todo-list__item-textfield" type="text" />
      <button class="todo-list__item-button">Изменить</button>
      <button class="todo-list__item-button">Удалить</button>
    </li> `)
  );
  task.innerHTML = html;
});
