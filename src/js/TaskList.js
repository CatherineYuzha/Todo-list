import Task from "./Task";

export default class TaskList {
  constructor(data) {
    this.list = data.list || [];

    this.$taskList = document.querySelector(".js-todo-list");
  }

  eventHandlers() {
    this.$addTaskInput = document.querySelector(".js-input");
    this.$addTaskButton = document.querySelector(".js-button");
    this.$deleteButtons = document.querySelectorAll(".js-button-delete");
    this.$editButtons = document.querySelectorAll(".js-button-edit");

    this.$addTaskButton.onclick = () => this.assignAddButton();
    this.$deleteButtons.forEach(button => this.assignRemoveButton(button));
    this.$editButtons.forEach(button => this.assignEditButton(button));
  }

  outputElement() {
    this.list.forEach(item => {
      const newTask = new Task(item);
      this.$taskList.append(newTask.template);
    });
  }

  add(task) {
    this.list.push(task);
  }

  delete(id) {
    this.list = this.list.filter(item => item.id !== id);
  }

  deleteLast() {

  }

  deleteFirst() {

  }

  modify() {

  }

  assignAddButton() {
    if (this.$addTaskInput.value === "") {
      return false;
    }

    const newTask = new Task(
      {
        text: this.$addTaskInput.value
      }
    );

    this.add(newTask.data);
    this.$taskList.append(newTask.template);
    this.$addTaskInput.value = "";

    this.assignRemoveButton(
      this.$taskList.lastElementChild.querySelector(".js-button-delete")
    );
    this.assignEditButton(
      this.$taskList.lastElementChild.querySelector(".js-button-edit")
    );
  }

  assignRemoveButton(button) {
    button.onclick = (event) => {
      const data = event.target.dataset;
      this.delete(data.id);
      const childrenTaskList = this.$taskList.children;

      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          task.remove();
        }
      }
    };
  }

  assignEditButton(button) {
    button.onclick = (event) => {
      const data = event.target.dataset;
      const childrenTaskList = this.$taskList.children;
      for (let task of childrenTaskList) {
        if (task.dataset.id === data.id) {
          const $editField = task.querySelector(".todo-list__item-textfield");
          const $editText = task.querySelector(".todo-list__item-text");

          const currentTask = this.list.find(task => task.id === data.id);
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
            editButton.innerText = "Сохранить";
            $editField.value = currentTask.text;
          } else {
            editButton.innerText = "Изменить";
            currentTask.text = $editField.value;
            $editText.innerHTML = $editField.value;
          }
        }
      }
    };
  }
}
