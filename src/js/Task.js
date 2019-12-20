import { generateId } from "./utils.js";

export default class Task {
  constructor(data, deleteCallback, editCallback, completeCallback) {
    console.log();
    this.text = data.text;
    this.id = data.id || generateId();
    this.editing = data.editing || false;
    this.done = data.done || false;
    this.deleteTask = deleteCallback;
    this.editTask = editCallback;
    this.completeTask = completeCallback;
  }

  get data() {
    const { text, id, editing, done } = this;

    return { text, id, editing, done };
  }

  get template() {
    this.outputTask = document.createElement("li");
    this.outputTask.classList.add("todo-list__item");

    this.taskDeleteButton = document.createElement("button");
    this.taskDeleteButton.classList.add("todo-list__item-button");
    this.taskDeleteButton.onclick = this.assignRemoveButton.bind(this);
    this.taskDeleteButton.append(document.createTextNode("Удалить"));

    this.taskEditButton = document.createElement("button");
    this.taskEditButton.classList.add("todo-list__item-button");
    this.taskEditButton.onclick = this.assignEditButton.bind(this, false);
    this.taskEditButton.append(document.createTextNode("Изменить"));

    this.editCancelButton = document.createElement("button");
    this.editCancelButton.classList.add("todo-list__item-button");
    this.editCancelButton.classList.add("todo-list__item-button_none");
    this.editCancelButton.onclick = this.assignEditButton.bind(this, true);
    this.editCancelButton.append(document.createTextNode("Отмена"));

    this.textTask = document.createElement("p");
    this.textTask.onclick = this.assignCompleteTask.bind(this);
    this.textTask.classList.add("todo-list__item-text");
    this.textTask.append(document.createTextNode(this.text));

    this.textFieldTask = document.createElement("textarea");
    this.textFieldTask.classList.add("todo-list__item-textfield");
    this.textFieldTask.setAttribute("placeholder", "Введите изменения...");

    this.outputTask.append(
      this.textTask,
      this.textFieldTask,
      this.taskEditButton,
      this.taskDeleteButton,
      this.editCancelButton
    );

    return this.outputTask;
  }

  assignRemoveButton() {
    this.outputTask.remove();
    this.deleteTask(this.id);
  }

  assignEditButton(isCancel) {
    if (!isCancel && !this.textFieldTask.value && this.editing) return false;
    this.editing = !this.editing;

    this.taskDeleteButton.classList.toggle(
      "todo-list__item-button_none",
      this.editing
    );

    this.editCancelButton.classList.toggle(
      "todo-list__item-button_none",
      !this.editing
    );

    this.textTask.classList.toggle("todo-list__item-text_none", this.editing);
    this.textFieldTask.classList.toggle(
      "todo-list__item-textfield_block",
      this.editing
    );

    if (this.editing) {
      this.taskEditButton.innerText = "Сохранить";
      this.textFieldTask.value = this.text;
    } else {
      this.taskEditButton.innerText = "Изменить";
      if (!isCancel) {
        this.text = this.textFieldTask.value;
        this.textTask.innerHTML = this.textFieldTask.value;
      }
    }
    this.editTask(this);
  }

  assignCompleteTask() {
    this.done = !this.done;
    this.textTask.classList.toggle("todo-list__item-text_done-text");
    this.taskEditButton.disabled = this.done;
    this.completeTask(this);
  }
}
