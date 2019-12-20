import { tasks as list } from "./stubs.js";
import TaskList from "./TaskList.js";
import "../scss/todo.scss";

document.addEventListener("DOMContentLoaded", function() {
  let taskList = new TaskList({ list });

  //taskList.outputElement();
  //taskList.eventHandlers();
});
