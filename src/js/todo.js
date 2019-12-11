document.addEventListener("DOMContentLoaded", function() {
  let todos = [
    {
      text: "Task",
      done: true,
      edit: false
    },
    {
      text: "Task1",
      done: false,
      edit: false
    }
  ];

  let todo = document.querySelector(".todo-list");
  let html = "";

  for (let i = 0; i < todos.length; i++) {
    const data = todos[i];
    html += ` <li> ${todos[i].text}
               ${todos[i].done}
               ${todos[i].edit}
              </li>`;
  }

  todo.innerHTML = html;
});
