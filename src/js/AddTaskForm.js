import Task from "./Task";

export default class AddTaskForm {
  constructor(addTaskCallback) {
    this.$addTaskInput = document.querySelector(".js-input");
    this.$addTaskButton = document.querySelector(".js-button");

    this.$addTaskButton.onclick = () => this.assignAddButton();
    this.addTask = addTaskCallback;
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

    this.$addTaskInput.value = "";
    this.addTask(newTask);
  }
}
