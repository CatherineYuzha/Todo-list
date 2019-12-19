import { tasks as list } from './stubs.js';
import TaskList from './TaskList.js';
import "../scss/todo.scss";

document.addEventListener("DOMContentLoaded", function() {
  let taskList = new TaskList({ list });

  taskList.outputElement();
  taskList.eventHandlers();

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
});
