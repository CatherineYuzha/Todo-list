import { tasks as list } from './stubs.js';
import TaskList from './TaskList.js';
import "../scss/todo.scss";
import Task from './Task.js';

document.addEventListener("DOMContentLoaded", function() {

  let taskList = new TaskList({ list });//read me деструктуризация

  const tasks = taskList.list;
  const $taskList = document.querySelector(".js-todo-list");



  tasks.forEach(item => {
    $taskList.append(.templateTask(item));
  });

  const $addTaskInput = document.querySelector(".js-input");
  const $addTaskButton = document.querySelector(".js-button");

  $addTaskButton.addEventListener("click", function() {
    if ($addTaskInput.value === "") {
      return false;
    }

    const task1= new Task(
      {
        text: taskList.text
      }
    );

    taskList.add(task1.data);
    console.log(task1.data);
    $taskList.append(templateTask(task1));
    $addTaskInput.value = "";
    // assignRemoveButton(
    //   $taskList.lastElementChild.querySelector(".js-button-delete")
    // );
    // assignEditButton(
    //   $taskList.lastElementChild.querySelector(".js-button-edit")
    // );
  });

  //
  //
  // const $deleteButtons = document.querySelectorAll(".js-button-delete");
  //
  // $deleteButtons.forEach(button => assignRemoveButton(button));
  //
  // const $editButtons = document.querySelectorAll(".js-button-edit");
  //
  // $editButtons.forEach(button => assignEditButton(button));
  // function assignRemoveButton(button) {
  //   button.addEventListener("click", function(event) {
  //     const data = event.target.dataset;
  //
  //     tasks = tasks.filter(item => item.id !== data.id);
  //
  //     const childrenTaskList = $taskList.children;
  //
  //     for (let task of childrenTaskList) {
  //       if (task.dataset.id === data.id) {
  //         task.remove();
  //       }
  //     }
  //   });
  // }
  //
  // function assignEditButton(button) {
  //   button.addEventListener("click", function(event) {
  //     const data = event.target.dataset;
  //     const childrenTaskList = $taskList.children;
  //     for (let task of childrenTaskList) {
  //       if (task.dataset.id === data.id) {
  //         const $editField = task.querySelector(".todo-list__item-textfield");
  //         const currentTask = tasks.find(task => task.id === data.id);
  //         const $editText = task.querySelector(".todo-list__item-text");
  //
  //         currentTask.editing = !currentTask.editing;
  //         $editText.classList.toggle(
  //           "todo-list__item-text_none",
  //           currentTask.edit
  //         );
  //         $editField.classList.toggle(
  //           "todo-list__item-textfield_block",
  //           currentTask.editing
  //         );
  //
  //         if (currentTask.editing) {
  //           button.innerText = "Сохранить";
  //           $editField.value = currentTask.text;
  //         } else {
  //           button.innerText = "Изменить";
  //           currentTask.text = $editField.value;
  //           $editText.innerHTML = $editField.value;
  //         }
  //       }
  //     }
  //   });
  // }
  // function assignCompletedTask(text) {
  //   text.addEventListener("click", function(event) {
  //     const data = event.target.dataset;
  //     const childrenTaskList = $taskList.children;
  //     const $editText = task.querySelector(".todo-list__item-text");
  //
  //     childrenTaskList.find(task => task.id === data.id);
  //     if (task.dataset.id === data.id) {
  //       const currentTask = tasks.find(task => task.id === data.id);
  //
  //       currentTask.done = !currentTask.done;
  //       $editText.classList.toggle(
  //         "todo-list__item-text__done-text",
  //         currentTask.done
  //       );
  //     }
  //   });
  // }
  //
  // function templateTask(task) {
  //   return `<li class="todo-list__item" data-id="${task.id}">
  //   <p class="todo-list__item-text js-text">${task.text}</p>
  //   <input class="todo-list__item-textfield" type="text" />
  //   <button class="todo-list__item-button js-button-edit" data-id="${task.id}">Изменить</button>
  //   <button class="todo-list__item-button js-button-delete" data-id="${task.id}">Удалить</button>
  //   </li>`;
  // }


});
