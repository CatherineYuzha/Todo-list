import Task from "./Task";

export default class AddTaskForm {
  constructor(addTaskCallback) {
    this.addTaskForm = document.createElement("div");
    this.addTaskForm.classList.add("todo-form");

    this.$addTaskInput = document.createElement("input");
    this.$addTaskInput.classList.add("todo-form__input");
    this.$addTaskInput.setAttribute("type", "text");

    this.$addTaskButton = document.createElement("button");
    this.$addTaskButton.classList.add("todo-form__button");
    this.$addTaskButton.append(document.createTextNode("Добавить"));
    this.$addTaskButton.setAttribute("onclick", "return false");

    this.addTaskForm.append(this.$addTaskInput, this.$addTaskButton);
    this.$addTaskButton.onclick = this.assignAddButton.bind(this);
    document.body.insertBefore(addTaskForm, script);
    this.addTask = addTaskCallback;
  }

  assignAddButton() {
    if (this.$addTaskInput.value === "") {
      return false;
    }

    const task = { text: this.$addTaskInput.value };
    this.$addTaskInput.value = "";
    this.addTask(task);
  }
}
