import Task from "./Task";
import AddTaskForm from "./AddTaskForm";

export default class TaskList {
  constructor(data) {
    this.outputElement(data);
    this.eventHandlers();
  }

  eventHandlers() {
    new AddTaskForm(this.add.bind(this));
  }

  outputElement(data) {
    this.list = [];
    this.$taskList = document.querySelector(".js-todo-list");

    data.list.forEach(item => {
      this.add(item);
    });
  }

  upItem(id, item) {
    let index = this.list.findIndex(item => id === item.id);

    if (index !== 0) {
      item.remove();
      this.$taskList.children[index - 1].before(item);
      const a = this.list[index - 1];
      this.list[index - 1] = this.list[index];
      this.list[index] = a;
    }
  }

  downItem(id, item) {
    let index = this.list.findIndex(item => id === item.id);
    
    if (index !== this.list.length - 1) {
      item.remove();
      this.$taskList.insertBefore(item, this.$taskList.childNodes[index + 1]);
      const a = this.list[index + 1];
      this.list[index + 1] = this.list[index];
      this.list[index] = a;
    }
  }

  add(task) {
    const newTask = new Task(
      task,
      this.delete.bind(this),
      this.modify.bind(this),
      this.complete.bind(this),
      this.upItem.bind(this),
      this.downItem.bind(this)
    );
    this.list.push(newTask.data);
    this.$taskList.append(newTask.template);
  }

  delete(id) {
    this.list = this.list.filter(item => item.id !== id);
  }

  modify(modifiedTask) {
    const task = this.list.find(task => task.id === modifiedTask.id);
    task.text = modifiedTask.text;
    task.editing = modifiedTask.editing;
  }

  complete(completedTask) {
    const task = this.list.find(task => task.id === completedTask.id);
    task.done = completedTask.done;
  }
}
