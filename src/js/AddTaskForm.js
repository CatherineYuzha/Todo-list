import Todo from "./Todo";

export default class AddTaskForm {
  constructor(addTaskCallback) {
    this.taskListWrapper = document.querySelector(".wrapper");
    this.addTaskForm = document.createElement("div");
    this.addTaskForm.classList.add("todo-form");

    this.header = document.createElement("header");
    this.header.classList.add("header");

    this.h1 = document.createElement("h1");
    this.h1.classList.add("header__item");
    this.h1.append(document.createTextNode("Список дел"));
    this.header.append(this.h1);

    this.$addTaskInput = document.createElement("input");
    this.$addTaskInput.classList.add("todo-form__input");
    this.$addTaskInput.setAttribute("type", "text");

    this.$addTaskButton = document.createElement("button");
    this.$addTaskButton.classList.add("todo-form__button");
    this.$addTaskButton.append(document.createTextNode("Добавить"));

    this.addTaskForm.append(this.$addTaskInput, this.$addTaskButton);
    this.$addTaskButton.onclick = this.assignAddButton.bind(this);
    this.taskListWrapper.prepend(this.header, this.addTaskForm);
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
