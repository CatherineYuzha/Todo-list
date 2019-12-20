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

  add(task) {
    const newTask = new Task(
      task,
      this.delete.bind(this),
      this.modify.bind(this),
      this.complete.bind(this)
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
